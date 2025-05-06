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

export default function CreditCardForm() {
  return (
    <Card
      variant="outlined"
      sx={{
        maxHeight: 'max-content',
        maxWidth: '40%',
        mx: 'auto',
        // to make the demo resizable
        overflow: 'auto',
        resize: 'horizontal',
      }}
    >
      <Typography level="title-lg">Add new crop</Typography>
      <Divider inset="none" />
      <CardContent
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
          gap: 1.5,
        }}
      >
        <FormControl sx={{ gridColumn: '1/-1' }}>
          <FormLabel>Plant Name</FormLabel>
          <Input />
        </FormControl>
        <FormControl>
          <FormLabel>Fertilizer Type</FormLabel>
          <Select
            defaultValue=""
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
            defaultValue=""
            size="small"
            sx={{ mt: 1 }}
          >
            <MenuItem value="soilInjection">Soil Injection</MenuItem>
            <MenuItem value="spray">Surface Spraying</MenuItem>
            <MenuItem value="droneSpray">Drone Spray</MenuItem>
          </Select>
        </FormControl>
        <Checkbox label="Hilly area" sx={{ gridColumn: '1/-1', my: 1 }} />
        <CardActions sx={{ gridColumn: '1/-1' }}>
          <Button variant="solid" color="primary">
            Add crop
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
