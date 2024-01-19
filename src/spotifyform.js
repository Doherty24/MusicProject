import React, { useState } from 'react';
import { Box, TextField, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SpotifyForm = () => {
    const [song, setSong] = useState('');
    const [Year, setYear] = useState('');
    const navigate = useNavigate();

    // Mock function to simulate getting recommended songs
    const getRecommendedSongs = (song, Year) => {
        // This is a placeholder. Replace with actual logic or API call.
        return [
            { name: "Northern Attitude (With Hozier)", Year: "Noah Kahan" },
            { name: "Stick Season", Year: "Noah Kahan" },
            { name: "Come Over", Year: "Noah Kahan" },
            { name: "View Between Villages", Year: "Noah Kahan" },
            { name: "4runner", Year: "Brenn!" },
            { name: "Eat Your Young", Year: "Hozier" },
            { name: "Everywhere, Everything (with Grace Albrams)", Year: "Noah Kahan" },
        ];
    };
    //When Submit Button Pressed Redirect to RecommendedSongs.js
    const handleSubmit = (e) => {
        e.preventDefault();
        const recommendedSongs = getRecommendedSongs(song, Year);
        navigate('/recommendations', { state: { songs: recommendedSongs } });
    };

    return (
        <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 4, fontFamily: "Arial, sans-serif" }}>
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{
                    mt: 1,
                    backgroundColor: "#f0f8ff",
                    borderRadius: "15px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    padding: "20px"
                }}
            >
                <img 
                    src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png" // Replace with your Spotify logo URL
                    alt="Spotify Logo"
                    style={{ maxWidth: '150px', margin: 'auto' }}
                />
                <br/>
                <Typography variant='h3'>Im in the mood for...</Typography>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="song"
                    label="Song Name"
                    variant='filled'
                    name="song"
                    autoComplete="song"
                    autoFocus
                    value={song}
                    onChange={(e) => setSong(e.target.value)}
                />
                {/*Text field for t*/}
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="Year"
                    label="Year"
                    variant='filled'
                    name="Year"
                    autoComplete="Year"
                    value={Year}
                    onChange={(e) => setYear(e.target.value)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Find Songs
                </Button>
            </Box>
                       {/* Text box below the form */}
                       <Box sx={{ marginTop: 2, backgroundColor: 'grey', padding: 2, borderRadius: '10px' }}>
                        <h4><p>Are you currently captivated by a particular song or Year? <br/>
                Longing to discover more tunes that resonate with the same vibe? <br/>
                Look no further,we have you covered! <br/>
                Simply enter your favorite song or Year, hit submit,  and let us curate a personalized playlist of similar tracks just for you. Immerse yourself in a world of music that mirrors your current obsession. Your next favorite song is just a click away!"


                </p></h4>
                {/* Add more paragraphs or other content as needed */}
            </Box>

        </Container>
    );
};



export default SpotifyForm;
