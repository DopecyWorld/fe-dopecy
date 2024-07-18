import { Box, Grid } from '@mui/material'
import React from 'react'
import CustomTypography from '../../../components/typography/CustomTypography'
import PackageICon from '../../../assets/images/PackageICon.svg'

function DeliverySection() {
    return (
        <Grid container spacing={4} sx={{ justifyContent: 'space-between' }}>
            <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ mr: 3 }}>
                    <Box component={'img'} src={PackageICon} alt='PackageICon'></Box>
                </Box>

                <Box>
                    <CustomTypography
                        text='Cannabis Delivery'
                        style={{
                            fontSize: '16px',
                            lineHeight: '19px',
                            fontWeight: '600',
                            textAlign: 'left',
                        }}
                    />
                    <CustomTypography
                        text='Lorem Ipsum is the dummy text'
                        style={{
                            fontSize: '14px',
                            lineHeight: '21px',
                            fontWeight: '400',
                            textAlign: 'left',
                            color: '#999999'
                        }}
                    />
                </Box>
            </Grid>
            <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ mr: 3 }}>
                    <Box component={'img'} src={PackageICon} alt='PackageICon'></Box>
                </Box>
                <Box>
                    <CustomTypography
                        text='Liquor Delivery'
                        style={{
                            fontSize: '16px',
                            lineHeight: '19px',
                            fontWeight: '600',
                            textAlign: 'left',
                        }}
                    />
                    <CustomTypography
                        text='Lorem Ipsum is the dummy text'
                        style={{
                            fontSize: '14px',
                            lineHeight: '21px',
                            fontWeight: '400',
                            textAlign: 'left',
                            color: '#999999'
                        }}
                    />
                </Box>
            </Grid>
            <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ mr: 3 }}>
                    <Box component={'img'} src={PackageICon} alt='PackageICon'></Box>
                </Box>
                <Box>
                    <CustomTypography
                        text='Food Delivery'
                        style={{
                            fontSize: '16px',
                            lineHeight: '19px',
                            fontWeight: '600',
                            textAlign: 'left',
                        }}
                    />
                    <CustomTypography
                        text='Lorem Ipsum is the dummy text'
                        style={{
                            fontSize: '14px',
                            lineHeight: '21px',
                            fontWeight: '400',
                            textAlign: 'left',
                            color: '#999999'
                        }}
                    />
                </Box>
            </Grid>
        </Grid>
    )
}

export default DeliverySection