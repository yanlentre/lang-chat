import React, { useState } from 'react'
import { Typography, InputLabel, MenuItem, FormControl, Select, Input, Checkbox, FormControlLabel, Button } from '@material-ui/core';
import { useForm } from "react-hook-form";
import './settings.css';

const languages = [
  'English',
  'Spanish'
];

const styles = {
  button: {
    background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .30)',
  },
};

const Settings = () => {
  const [myLanguage, setMyLanguage] = useState();
  const [newLanguage, setNewLanguage] = useState();


  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  const handleMyLangChange = (event) => {
    const { value } = event.target;
    setMyLanguage(value);
  };

  const handleNewLangChange = (event) => {
    const { value } = event.target;
    setNewLanguage(value);
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography align='center' variant='h4' className="title">
            Language Exchange Chatroulette
        </Typography>
        <div className="selectsWrapper">
          <FormControl
            fullWidth
            classes={{
              root: "mr",
            }}>
            <InputLabel id="demo-simple-select-label">My language</InputLabel>
            <Select
              required
              labelId="my-lang"
              id="my-lang-select"
              value={myLanguage}
              input={<Input />}
              onChange={handleMyLangChange}
              {...register("my-lang")}
            >
              {languages.map((language) => (
                <MenuItem key={language} value={language}>
                  {language}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Language I want to learn</InputLabel>
            <Select
              required
              labelId="new-lang"
              id="new-lang-select"
              value={newLanguage}
              input={<Input />}
              onChange={handleNewLangChange}
              {...register("new-lang")}
            >
              {languages.map((language) => (
                <MenuItem key={language} value={language}>
                  {language}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="perferencesWrapper">
          <span className="title">Choose your communication preferences</span>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  // checked={state.checkedF}
                  // onChange={handleChange}
                  name="audio"
                  color="primary"
                  {...register("audio")}
                />
              }
              label="Audio"
            />
            <FormControlLabel
              control={
                <Checkbox
                  // checked={state.checkedF}
                  // onChange={handleChange}
                  name="video"
                  color="primary"
                  {...register("video")}
                />
              }
              label="Video"
            />
                    <FormControlLabel
              control={
                <Checkbox
                  checked={true}
                  // onChange={handleChange}
                  name="text"
                  color="primary"
                  disabled
                />
              }
              label="Text chat"
            />
          </div>
        </div>
        <div className='buttonFind'>
          <Button
            style={{
              ...styles.button
            }}
            sizeLarge
            type="submit"
          >
            Find my Study Buddy
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Settings;