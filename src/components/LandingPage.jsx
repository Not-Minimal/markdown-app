import React, { useState } from 'react';
import { Button, Card, CardContent, CardHeader, Divider, Paper, IconButton, Grid } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { DownloadOutlined, MergeRounded } from '@mui/icons-material';
import MarkdownPreview from '@uiw/react-markdown-preview';
import './LandingPage.css';

// Componente para mostrar la vista previa de Markdown fusionado
const MergedMarkdownPreview = ({ markdown }) => {
    return (
        <div>
            <MarkdownPreview source={markdown} />
        </div>
    );
};

function LandingPage() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [mergedMarkdown, setMergedMarkdown] = useState('');

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
        document.body.appendChild(a);
        a.click();

        // Revocar la URL para liberar recursos
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    };

    return (
        <div className="landing-page">
            <Grid container spacing={2}>
                {/* Sección de Drag and Drop (Izquierda) */}
                <Grid item xs={12} sm={6}>
                    <Paper className="markdown-joiner">
                        <input type="file" id="file-input" multiple accept=".md" style={{ display: 'none' }} onChange={handleFileSelect} />
                        <label htmlFor="file-input">
                            {/* Zona de arrastre o botón de carga */}
                            <IconButton color="primary" aria-label="upload file" component="span">
                                <CloudUploadIcon />
                            </IconButton>
                            Selecciona o Arrastra tus archivos
                        </label>
                        <Button variant="outlined" startIcon={<MergeRounded />} color="primary" onClick={handleMergeClick}>
                            Fusionar Archivos
                        </Button>
                        <Button variant="contained" startIcon={<DownloadOutlined />} color="primary" onClick={handleDownloadClick}>
                            Descargar
                        </Button>
                    </Paper>
                </Grid>

                {/* Columna Vertical a la Derecha (Visualización de Markdown) */}
                <Grid item xs={12} sm={6}>
                    <Card sx={{ maxWidth: 800, margin: 'auto', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', background: 'white' }}>
                        <CardHeader
                            title="Vista Previa del Markdown Fusionado"
                            sx={{ backgroundColor: '#1976D2', color: 'white' }}
                        />
                        <Divider />
                        <CardContent sx={{ backgroundColor: 'white', padding: '0px' }}>
                            <Paper style={{ maxHeight: '500px', overflowY: 'auto' }} className='markdown-preview-container'>
                                {/* Utiliza el componente MergedMarkdownPreview para mostrar la vista previa */}
                                <MergedMarkdownPreview markdown={mergedMarkdown} />
                            </Paper>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default LandingPage;
