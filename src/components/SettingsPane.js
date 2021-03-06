import React from "react";
import Drawer from "@material-ui/core/Drawer";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import { ChromePicker } from "react-color";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";

import styled from "styled-components";

import Dropzone from "react-dropzone";

const SettingsPane = ({
  onClickToggleSettings,
  onChangeAmountOfCards,
  onChangeZeroCard,
  onChangeHalfyCard,
  onChangeInfinityCard,
  onChangeTShirtSizingCards,
  isOpen,
  numberOfCards,
  showZeroCard,
  showHalfyCard,
  showInfinityCard,
  showTShirtSizingCards,
  onChangeBackgroundColor,
  onChangeUpdateCardBackBackgroundColor,
  onChangeUpdateCardFrontBackgroundColor,
  onChangeUpdateCardFrontFontBackgroundColor,
  backgroundColor,
  cardFrontBackgroundColor,
  cardFrontFontColor,
  cardBackgroundImage,
  cardBackgroundColor,
  onDropImageUpload,
  removeBackgroundImage
}) => (
  <Drawer anchor="right" open={isOpen}>
    <div style={{ padding: "16vw 2vw 2vw", height: "100vw" }}>
      <IconButton
        onClick={onClickToggleSettings}
        aria-label="Close settings menu"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          zIndex: 10
        }}
      >
        <CloseIcon />
      </IconButton>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <h2>Card settings</h2>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ display: "block" }}>
          <FormGroup>
            <TextField
              id="number"
              label="Number"
              value={numberOfCards}
              onChange={onChangeAmountOfCards}
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
              fullWidth={true}
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch checked={showZeroCard} onChange={onChangeZeroCard} />
              }
              label="Show zero-card"
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch checked={showHalfyCard} onChange={onChangeHalfyCard} />
              }
              label="Show half-card"
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={showInfinityCard}
                  onChange={onChangeInfinityCard}
                />
              }
              label="Show infinity card"
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={showTShirtSizingCards}
                  onChange={onChangeTShirtSizingCards}
                />
              }
              label="Show T-shirt sizing (XS, S, M, L, XL)"
            />
          </FormGroup>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <h2>Colors</h2>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ display: "block" }}>
          <FormGroup>
            <h3>App background color</h3>
            <ChromePicker
              color={backgroundColor}
              onChangeComplete={onChangeBackgroundColor}
              style={colorPickerStyle}
            />
          </FormGroup>
          <FormGroup>
            <h3>Card front text color</h3>
            <ChromePicker
              color={cardFrontFontColor}
              onChangeComplete={onChangeUpdateCardFrontFontBackgroundColor}
              style={colorPickerStyle}
            />
          </FormGroup>
          <FormGroup>
            <h3>Card front background color</h3>
            <ChromePicker
              color={cardFrontBackgroundColor}
              onChangeComplete={onChangeUpdateCardFrontBackgroundColor}
              style={colorPickerStyle}
            />
          </FormGroup>
          <FormGroup>
            <h3>Card back background color</h3>
            <ChromePicker
              color={cardBackgroundColor}
              onChangeComplete={onChangeUpdateCardBackBackgroundColor}
              style={colorPickerStyle}
            />
          </FormGroup>
          <FormGroup>
            <h3>Card back background image (overwrites color)</h3>
            {cardBackgroundImage !== undefined ? (
              <CardBackPreview>
                <CurrentBackgroundImage
                  src={cardBackgroundImage}
                  alt="Current background image"
                />
                <RemoveBackgroundImageButton>
                  <Button
                    variant="fab"
                    color="secondary"
                    aria-label="Remove"
                    onClick={removeBackgroundImage}
                  >
                    <DeleteIcon />
                  </Button>
                </RemoveBackgroundImageButton>
              </CardBackPreview>
            ) : (
              <Dropzone
                accept={"image/jpeg, image/png"}
                disablePreview={false}
                multiple={false}
                onDrop={onDropImageUpload}
                name="uploadBackgroundImage"
                title="Click to upload an image"
              />
            )}
          </FormGroup>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  </Drawer>
);

const CardBackPreview = styled.div`
  position: relative;
  margin: 0.8rem;
`;

const CurrentBackgroundImage = styled.img`
  max-width: 25.6rem;
  height: auto;
`;

const RemoveBackgroundImageButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledSettingsPane = styled.div`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 10;
  top: 0;
  left: 0;
`;

const colorPickerStyle = {
  wrap: {
    boxShadow: "0",
    width: "100%"
  }
};

export default SettingsPane;
