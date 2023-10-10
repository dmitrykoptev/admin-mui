import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import ExpendMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequentely Asked Questions Page" />
      <Box display="flex" flexDirection="column" gap="10px">
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpendMoreIcon />}>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              An important question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              nobis? In eos quibusdam voluptatum explicabo, repudiandae, maiores
              inventore, ea consequatur quis voluptas ipsam dignissimos est
              molestiae dicta nulla voluptate laboriosam?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpendMoreIcon />}>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              Another important question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
              beatae molestias provident voluptas error, tempore atque incidunt
              soluta labore consectetur laudantium dolorem reprehenderit magnam
              sapiente vitae adipisci fuga eum animi?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpendMoreIcon />}>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              Your top question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
              porro expedita quae cum aperiam, nesciunt a nostrum quia
              voluptatum, consequatur repellat temporibus ad consectetur nobis
              omnis distinctio necessitatibus possimus amet.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpendMoreIcon />}>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              Random question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis saepe expedita autem natus officia debitis possimus
              voluptates nulla molestiae earum accusamus, nihil optio
              consequuntur ratione sunt nam perspiciatis, aliquid ex?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpendMoreIcon />}>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              Final question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur blanditiis facilis ipsum eum perspiciatis rem ea rerum
              magnam, ullam ad velit porro cupiditate architecto sapiente
              corrupti odit nesciunt, dolorem delectus?
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default FAQ;
