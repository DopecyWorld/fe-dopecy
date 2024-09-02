import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomTypography from '../../components/typography/CustomTypography';

export default function AccordionUsage() {
    return (
        <div>
            <Accordion sx={{ border: 'none', borderBottom: '1px solid', borderColor: 'text.cstmwhite', boxShadow: 'none' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                // sx={{ py: 2 }}
                >
                    Express Delivery
                </AccordionSummary>
                <AccordionDetails sx={{ textAlign: 'left' }}>
                    <CustomTypography
                        text='Using vitamin C supplements effectively involves understanding the appropriate dosage, the form that best suits your needs, and the timing of intake. Here are some guidelines.'
                        style={{
                            fontWeight: '400',
                            fontSize: '1rem', // 16px to rem
                            lineHeight: '1.5rem', // 24px to rem
                            textAlign: 'left',
                            color: 'text.accordiontext',
                        }}
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ border: 'none', borderBottom: '1px solid', borderColor: 'text.cstmwhite', boxShadow: 'none' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                // sx={{ py: 2 }}
                >
                    Messenger Delivery
                </AccordionSummary>
                <AccordionDetails sx={{ textAlign: 'left' }}>
                    <CustomTypography
                        text='Using vitamin C supplements effectively involves understanding the appropriate dosage, the form that best suits your needs, and the timing of intake. Here are some guidelines.'
                        style={{
                            fontWeight: '400',
                            fontSize: '1rem', // 16px to rem
                            lineHeight: '1.5rem', // 24px to rem
                            textAlign: 'left',
                            color: 'text.accordiontext',
                        }}
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ border: 'none', borderBottom: '1px solid', borderColor: 'text.cstmwhite', boxShadow: 'none' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                // sx={{ py: 2 }}
                >
                    Dopecy Delivery
                </AccordionSummary>
                <AccordionDetails sx={{ textAlign: 'left' }}>
                    <CustomTypography
                        text='Using vitamin C supplements effectively involves understanding the appropriate dosage, the form that best suits your needs, and the timing of intake. Here are some guidelines.'
                        style={{
                            fontWeight: '400',
                            fontSize: '1rem', // 16px to rem
                            lineHeight: '1.5rem', // 24px to rem
                            textAlign: 'left',
                            color: 'text.accordiontext',
                        }}
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ border: 'none', borderBottom: '1px solid', borderColor: 'text.cstmwhite', boxShadow: 'none' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4-content"
                    id="panel4-header"
                // sx={{ py: 2 }}
                >
                    Parcel Delivery
                </AccordionSummary>
                <AccordionDetails sx={{ textAlign: 'left' }}>
                    <CustomTypography
                        text='Using vitamin C supplements effectively involves understanding the appropriate dosage, the form that best suits your needs, and the timing of intake. Here are some guidelines.'
                        style={{
                            fontWeight: '400',
                            fontSize: '1rem', // 16px to rem
                            lineHeight: '1.5rem', // 24px to rem
                            textAlign: 'left',
                            color: 'text.accordiontext',
                        }}
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ border: 'none', borderBottom: '1px solid', borderColor: 'text.cstmwhite', boxShadow: 'none' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5-content"
                    id="panel5-header"
                // sx={{ py: 2 }}
                >
                    Store Delivery
                </AccordionSummary>
                <AccordionDetails sx={{ textAlign: 'left' }}>
                    <CustomTypography
                        text='Using vitamin C supplements effectively involves understanding the appropriate dosage, the form that best suits your needs, and the timing of intake. Here are some guidelines.'
                        style={{
                            fontWeight: '400',
                            fontSize: '1rem', // 16px to rem
                            lineHeight: '1.5rem', // 24px to rem
                            textAlign: 'left',
                            color: 'text.accordiontext',
                        }}
                    />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
