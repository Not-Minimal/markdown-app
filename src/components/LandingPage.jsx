import React, { useState } from 'react';
import { Button, Card, CardContent, CardHeader, Divider, Paper, IconButton, Box } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { DownloadOutlined } from '@mui/icons-material';
import './LandingPage.css';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { MergeRounded } from '@mui/icons-material';


// Nuevo componente para la sección de previsualización
function PreviewSection({ mergedMarkdown, onDownloadClick, onBackClick }) {
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
                        {/* Utiliza el componente MarkdownPreview para mostrar la vista previa */}
                        <MarkdownPreview source={mergedMarkdown} />
                    </Paper>
                </CardContent>
                <CardContent>
                    {/* Botones en la sección de previsualización */}
                    <Button
                        variant="contained"
                        startIcon={<DownloadOutlined />}
                        color="primary"
                        onClick={onDownloadClick}
                        sx={{ margin: '8px' }}
                    >
                        Descargar
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
    const [showPreview, setShowPreview] = useState(false); // Estado para mostrar la previsualización

    // Función para manejar la selección de archivos
    const handleFileSelect = (event) => {
        const files = Array.from(event.target.files);

        // Filtrar archivos .md
        const markdownFiles = files.filter((file) => file.name.endsWith('.md'));

        setSelectedFiles(markdownFiles);
    };

    // Función para fusionar y generar la salida
    const handleMergeClick = () => {
        if (selectedFiles.length === 0) {
            alert('Por favor, selecciona archivos Markdown para fusionar.');
            return;
        }

        // Ordenar archivos alfabéticamente por nombre
        const sortedFiles = selectedFiles.slice().sort((a, b) => a.name.localeCompare(b.name));

        // Inicializar un FileReader y una variable de salida
        const reader = new FileReader();
        let mergedMarkdown = '';

        // Función para manejar la lectura de cada archivo
        const readNextFile = (index) => {
            if (index < sortedFiles.length) {
                reader.onload = (e) => {
                    const fileContents = e.target.result;
                    mergedMarkdown += fileContents + '\n';

                    // Leer el siguiente archivo
                    readNextFile(index + 1);
                };
                reader.readAsText(sortedFiles[index]);
            } else {
                // Todos los archivos han sido leídos y fusionados
                setMergedMarkdown(mergedMarkdown);
                setShowPreview(true); // Mostrar la previsualización después de la fusión
            }
        };

        // Comenzar a leer los archivos
        readNextFile(0);
    };

    // Función para generar y descargar el archivo Markdown fusionado
    const handleDownloadClick = () => {
        if (!mergedMarkdown) {
            alert('Por favor, fusiona archivos Markdown primero.');
            return;
        }

        // Crear un blob con el contenido Markdown
        const blob = new Blob([mergedMarkdown], { type: 'text/markdown' });

        // Crear una URL para el blob
        const url = window.URL.createObjectURL(blob);

        // Crear un elemento <a> para descargar
        const a = document.createElement('a');
        a.href = url;
        a.download = 'merged.md'; // Establece el nombre de archivo deseado aquí

        // Simular un clic en el elemento <a> para iniciar la descarga
        a.click();

        // Revocar la URL para liberar recursos
        window.URL.revokeObjectURL(url);
    };

    // Función para volver atrás y fusionar nuevos archivos
    const handleBackClick = () => {
        setShowPreview(false); // Ocultar la previsualización y mostrar el área de fusión nuevamente
        setSelectedFiles([]);
        setMergedMarkdown('');
    };

    return (
        <div className="landing-page">
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                minHeight="80vh"
            >
                {showPreview ? (
                    // Mostrar la sección de previsualización si showPreview es true
                    <PreviewSection
                        mergedMarkdown={mergedMarkdown}
                        onDownloadClick={handleDownloadClick}
                        onBackClick={handleBackClick}
                    />
                ) : (
                    // Mostrar el área de "Fusionar Archivos" y "Drag and Drop" si showPreview es false
                    <div className="markdown-joiner">
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
                            Selecciona o Arrastra tus archivos
                        </label>
                        <Button
                            variant="outlined"
                            startIcon={<MergeRounded />}
                            color="primary"
                            onClick={handleMergeClick}
                            sx={{ marginTop: '4px', margin: '8px' }}
                        >
                            Fusionar Archivos
                        </Button>
                    </div>
                )}
            </Box>
        </div>
    );
}

export default LandingPage;
