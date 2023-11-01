import * as React from "react";
import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];
const ColorlibConnector = styled(StepConnector)({
  "& .MuiStepConnector-line": {
    borderColor: "#6744B6",
    borderTopWidth: 3,
    borderRadius: 1,
  },
});

export default function HorizontalLinearStepperv2({ currentStep, steps }) {
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const iconStyle = { color: "#6744B6" }; // Custom color for icons

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              icon={
                index === currentStep ? (
                  <RadioButtonCheckedIcon style={iconStyle} />
                ) : index < currentStep ? (
                  <CheckCircleIcon style={iconStyle} />
                ) : (
                  <RadioButtonUncheckedIcon style={iconStyle} />
                )
              }
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
