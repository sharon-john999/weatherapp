import * as React from 'react';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { InputLabel, MenuItem, Select } from '@mui/material';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

export default function FAB() {
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = useState({
        plantname: '',
        dateAdded:'',
        fertilizername: '',
        fertilizertype: '',
        fertilizermethod: '',
        planttype: '',
        fertilizerquantity: '',
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addCrop = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/crops", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert("Crop added successfully");
      setOpen(false);  // Close dialog
      setFormData({
        plantname: '',
        dateAdded: '',
        fertilizername: '',
        fertilizertype: '',
        fertilizermethod: '',
        planttype: '',
        fertilizerquantity: '',
      });
    } else {
      alert("Failed to add crop");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Error adding crop");
  }
};


    return (
        <React.Fragment>
            <Box sx={{
                position: 'fixed',
                bottom: 16,
                right: 16,}}>
                    <Fab color='primary' aria-label="add" onClick={handleOpen}>
                        <AddIcon />
                    </Fab>
            </Box>

            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth maxWidth='sm'>
                <DialogTitle>Add Crop</DialogTitle>
                <DialogContent>
                    <Card
                        variant="outlined"
                        sx={{
                            maxHeight: 'max-content',
                            maxWidth: '100%',
                            boxShadow: 'none',
                            mx: 'auto',
                            overflow: 'visible',
                            resize: 'none',
                            mt:1,
                            mb:1,
                        }}
                        >
                        <CardContent
                            sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
                            gap: 1.5,
                            }}>

                            <FormControl sx={{ gridColumn: '1/-1' }}>
                                <FormLabel>Crop Name</FormLabel>
                                <Input 
                                name='plantname'
                                value={formData.plantname}
                                onChange={(e) => setFormData({ ...formData, plantname: e.target.value})}
                                />
                            </FormControl>

                            <FormControl sx={{ gridColumn: '1/-1' }}>
                                <FormLabel>Fertilizer name</FormLabel>
                                <Input 
                                name='fertilizername'
                                value={formData.fertilizername}
                                onChange={(e) => setFormData({ ...formData, fertilizername: e.target.value})}
                                
                                />
                            </FormControl>

                            < FormControl>
                                < FormLabel>Crop Type </FormLabel>
                                <Select
                                    value={formData.planttype}
                                    onChange={(e) => setFormData({ ...formData, planttype: e.target.value})}
                                    size="small"
                                    sx={{ mt: 1 }}

                                >
                                    <MenuItem value="Food Crop">Food Crop</MenuItem>
                                    <MenuItem value="Feed Crop">Feed Crop</MenuItem>
                                    <MenuItem value="Fiber Crop">Fiber Crop</MenuItem>
                                    <MenuItem value="Oil Crop">Oil Crop</MenuItem>
                                    <MenuItem value="Industrial Crop">Industrial Crop</MenuItem>
                                </Select>
                            
                            </FormControl>

                            <FormControl>
                                < FormLabel>Fertilizer Quantity (in Kg)</FormLabel>
                                <Input
                                value={formData.fertilizerquantity}
                                onChange={(e) => setFormData({ ...formData, fertilizerquantity: e.target.value})}
                                size="md"
                                sx={{ mt: 1 }}
                                ></Input>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Fertilizer Type</FormLabel>
                                <Select
                                    value={formData.fertilizertype}
                                    onChange={(e) => setFormData({ ...formData, fertilizertype: e.target.value})}
                                    size="small"
                                    sx={{ mt: 1 }}
                                >
                                    <MenuItem value="organic">Organic</MenuItem>
                                    <MenuItem value="inorganic">Inorganic</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Method</FormLabel>
                                <Select
                                    value={formData.fertilizermethod}
                                    onChange={(e) => setFormData({ ...formData, fertilizermethod: e.target.value})}
                                    size="small"
                                    sx={{ mt: 1 }}
                                >
                                    <MenuItem value="Broadcasting">Broadcasting</MenuItem>
                                    <MenuItem value="Placement">Placement</MenuItem>
                                    <MenuItem value="Foliar">Foliar</MenuItem>
                                    <MenuItem value="Fertigation">Fertigation</MenuItem>
                                    <MenuItem value="Aerial">Aerial</MenuItem>
                                </ Select>
                            </ FormControl>

                            <CardActions sx={{ gridColumn: '1/-1' }}>
                                <Button variant="solid" color="primary" onClick={addCrop}>
                                    Add crop
                                </Button>
                                <Button onClick={handleClose} variant='outlined' color='neutral'>
                                    Cancel
                                </Button>

                            </CardActions>
                        </CardContent>
                    </Card>
                </DialogContent>
            </Dialog>
        </React.Fragment>
      );
    }