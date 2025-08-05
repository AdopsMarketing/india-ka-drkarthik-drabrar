"use client";

import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface FAQItem {
  question: string;
  answer?: string;
}

interface FAQProps {
  items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  return (
    <Box component="section" mt={8} id="faq">
      <Container maxWidth="md">
        <Typography variant="h4" color="black" gutterBottom textAlign="center">
          FAQ
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            boxShadow:
              "0 83px 23px rgba(0,0,0,0.00), 0 53px 21px rgba(0,0,0,0.01), 0 30px 18px rgba(0,0,0,0.05), 0 13px 13px rgba(0,0,0,0.09), 0 3px 7px rgba(0,0,0,0.10)",
            bgcolor: "background.paper",
            px: { xs: 2, md: 4 },
            py: 4,
            borderRadius: 4,
            width: "100%",
          }}
        >
          {items.map((item, index) => (
            <Accordion key={index} disableGutters>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}
                aria-controls={`faq-content-${index}`}
                id={`faq-header-${index}`}
              >
                <Typography
                  variant="h6"
                  color="black"
                  fontWeight="semibold"
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              {item.answer && (
                <AccordionDetails>
                  <Typography variant="body1" color="text.secondary">
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              )}
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;
