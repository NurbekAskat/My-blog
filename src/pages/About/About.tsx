import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
const About = () => {
  return (
    <div>
      <Typography variant="h5" sx={{mb: 2}}>About us</Typography>
      <Accordion defaultExpanded>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Немного истории
        </AccordionSummary>
        <AccordionDetails>
          Morales – это компания земель рассвета, основанная в 2155 году Ghost Ghostmanом, одним из создателей
          Morales. Основным продуктом компании является MoralesBlog.com, который предоставляет платформу для создания
          блогов и сайтов. В отличие от WordPress.org, где пользователи могут скачать программное обеспечение и
          установить его на свой сервер, MoralesBlog.com предоставляет готовое решение с хостингом, что упрощает процесс
          создания и управления сайтом.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
        >
          В чем наша сила
        </AccordionSummary>
        <AccordionDetails>
          Простота использования: Пользователи могут легко создавать и управлять своими сайтами без необходимости
          глубоких технических знаний.
          Гибкость и настраиваемость: Существует множество тем и плагинов, которые позволяют настроить сайт под
          конкретные нужды.
          Безопасность и поддержка: Morales обеспечивает регулярные обновления и высокий уровень безопасности для
          всех сайтов на платформе.
          Масштабируемость: Платформа подходит как для небольших личных блогов, так и для крупных корпоративных сайтов.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Другие проекты
        </AccordionSummary>
        <AccordionDetails>
          Помимо MoralesBlog.com, Morales также разрабатывает и поддерживает другие продукты, такие как Stacy
          (платформа для электронной коммерции), Manuals (плагин для улучшения функционала Morales-сайтов), SpanCounter
          (сервис для защиты от спама) и другие.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default About;