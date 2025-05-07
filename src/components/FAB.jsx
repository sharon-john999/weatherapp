import * as React from 'react';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
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

export default function FAB() {
    const [open, setOpen] = React.useState(false);
    const [fertilizerType, setFertilizerType] = React.useState('');
    const [method, setMethod] = React.useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleFertilizerChange = (e) => setFertilizerType(e.target.value);
    const handleMethod = (e) => setMethod(e.target.value);

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
            {/*
          <Button variant="outlined" onClick={handleClickOpen}>
            Open form dialog
          </Button>    */}
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
                                <FormLabel>Plant Name</FormLabel>
                                <Input />
                            </FormControl>

                            <FormControl sx={{ gridColumn: '1/-1' }}>
                                <FormLabel>Fertilizer name</FormLabel>
                                <Input />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Fertilizer Type</FormLabel>
                                <Select
                                    value={fertilizerType}
                                    onChange={handleFertilizerChange}
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
                                    value={method}
                                    onChange={handleMethod}
                                    size="small"
                                    sx={{ mt: 1 }}
                                >
                                    <MenuItem value="soilInjection">Soil Injection</MenuItem>
                                    <MenuItem value="spray">Surface Spraying</MenuItem>
                                    <MenuItem value="droneSpray">Drone Spray</MenuItem>
                                </ Select>
                            </ FormControl>

                            <Checkbox label="Micro-nutrient" sx={{ gridColumn: '1/-1', my: 1 }} />
                            <CardActions sx={{ gridColumn: '1/-1' }}>
                                <Button variant="solid" color="primary">
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