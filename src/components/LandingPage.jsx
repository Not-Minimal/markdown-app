import React, { useState } from 'react';
import { Button, Card, CardContent, CardHeader, Divider, Paper, IconButton } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { DownloadOutlined } from '@mui/icons-material';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { MergeRounded, PictureAsPdfRounded } from '@mui/icons-material';
import './LandingPage.css';

function PreviewSection({ mergedMarkdown, onDownloadClick, onDownloadPdfClick, onBackClick }) {
    return (
        <div className="markdown-preview-container">
            <Card>
                <CardHeader
                    title="Vista Previa del Markdown Fusionado"
                    sx={{ backgroundColor: '#1976D2', color: 'white' }}
                />
                <Divider />
                <CardContent>
                    <Paper style={{ maxHeight: '500px', overflow: 'auto' }}>
                        <MarkdownPreview source={mergedMarkdown} />
                    </Paper>
                </CardContent>
                <CardContent>
                    <Button
                        variant="contained"
                        startIcon={<DownloadOutlined />}
                        color="primary"
                        onClick={onDownloadClick}
                        sx={{ margin: '8px' }}
                    >
                        Descargar Markdown
                    </Button>
                    <Button
                        variant="contained"
                        startIcon={<PictureAsPdfRounded />}
                        color="primary"
                        onClick={onDownloadPdfClick}
                        sx={{ margin: '8px' }}
                    >
                        Descargar PDF
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={onBackClick}
                        sx={{ margin: '8px' }}
                    >
                        Volver para fusionar nuevos archivos
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

function LandingPage() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [mergedMarkdown, setMergedMarkdown] = useState('');
    const [showPreview, setShowPreview] = useState(false);

    const handleFileSelect = (event) => {
        const files = Array.from(event.target.files);
        const markdownFiles = files.filter((file) => file.name.endsWith('.md'));
        setSelectedFiles(markdownFiles);
    };

    const handleMergeClick = () => {
        if (selectedFiles.length === 0) {
            alert('Por favor, selecciona archivos Markdown para fusionar.');
            return;
        }

        const sortedFiles = selectedFiles.slice().sort((a, b) => a.name.localeCompare(b.name));
        const reader = new FileReader();
        let mergedMarkdown = '';

        const readNextFile = (index) => {
            if (index < sortedFiles.length) {
                reader.onload = (e) => {
                    const fileContents = e.target.result;
                    mergedMarkdown += fileContents + '\n';
                    readNextFile(index + 1);
                };
                reader.readAsText(sortedFiles[index]);
            } else {
                setMergedMarkdown(mergedMarkdown);
                setShowPreview(true);
            }
        };

        readNextFile(0);
    };

    const handleDownloadClick = () => {
        if (!mergedMarkdown) {
            alert('Por favor, fusiona archivos Markdown primero.');
            return;
        }

        const blob = new Blob([mergedMarkdown], { type: 'text/markdown' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'merged.md';
        a.click();
        window.URL.revokeObjectURL(url);
    };

    const handleDownloadPdfClick = async () => {
        if (!mergedMarkdown) {
            alert('Por favor, fusiona archivos Markdown primero.');
            return;
        }

        try {
            const pdfBlob = await fetch('/api/pdf', {
                method: 'POST',
                body: JSON.stringify({ markdown: mergedMarkdown }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((response) => response.blob());

            const pdfUrl = URL.createObjectURL(pdfBlob);
            const a = document.createElement('a');
            a.href = pdfUrl;
            a.download = 'merged.pdf';
            a.click();
            window.URL.revokeObjectURL(pdfUrl);
        } catch (error) {
            console.error('Error al generar el PDF:', error);
        }
    };

    const handleBackClick = () => {
        setShowPreview(false);
        setSelectedFiles([]);
        setMergedMarkdown('');
    };

    return (
        <div className="landing-page-container">
            {showPreview ? (
                <PreviewSection
                    mergedMarkdown={mergedMarkdown}
                    onDownloadClick={handleDownloadClick}
                    onDownloadPdfClick={handleDownloadPdfClick}
                    onBackClick={handleBackClick}
                />
            ) : (
                <div className="landing-content">
                    <div className="markdown-joiner">
                        <div style={{ marginBottom: '16px', padding: '20px' }}>
                            <input
                                type="file"
                                id="file-input"
                                multiple
                                accept=".md"
                                style={{ display: 'none' }}
                                onChange={handleFileSelect}
                            />
                            <label htmlFor="file-input">
                                <IconButton
                                    color="primary"
                                    aria-label="upload file"
                                    component="span"
                                >
                                    <CloudUploadIcon />
                                </IconButton>
                                Seleccionar Archivos
                            </label>
                        </div>
                        <div>
                            <Button
                                variant="outlined"
                                startIcon={<MergeRounded />}
                                color="primary"
                                onClick={handleMergeClick}
                                sx={{ margin: '8px' }}
                            >
                                Unir Archivos
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LandingPage;
