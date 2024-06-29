import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

const Contacts = () => {
  return (
    <div>
      <Typography variant="h5">Contacts</Typography>
      <Accordion defaultExpanded>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Адрес офиса
        </AccordionSummary>
        <AccordionDetails>
          ОcОО "Morales"{<br/>}
          123456, г. Бишкек, ул. Какая-то, д. 1, оф. 101
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Телефон
        </AccordionSummary>
        <AccordionDetails>
          +7 (495) 123-45-67
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Социальные сети
        </AccordionSummary>
        <AccordionDetails>
          Facebook{<br/>}
          Instagram{<br/>}
          LinkedIn
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Часы работы
        </AccordionSummary>
        <AccordionDetails>
          Понедельник - Пятница: 9:00 - 18:00 {<br/>}
          Суббота - Воскресенье: выходной
        </AccordionDetails>
      </Accordion>

    </div>
  );
};

export default Contacts;