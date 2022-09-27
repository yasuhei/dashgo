import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from 'next/dynamic'
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { useEffect, useState } from 'react';



const Chart = dynamic(() => import('react-apexcharts'), {
    ssr:false
})


const options = {
chart: {
    toolbar: {
        show: false
    },
    zoom: {
        enabled: false
    },
    foreColor: theme.colors.gray[500]
},
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false
    }, 
    tootip: {
        enabled: false
    },
    xaxis: {


        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
            new Date("2022-03-23T00:00:00.000Z").toLocaleString('pt-BR', { day: "2-digit", month: "short" }),
            new Date("2022-03-24T00:00:00.000Z").toLocaleString('pt-BR', { day: "2-digit", month: "short" }),
            new Date("2022-03-25T00:00:00.000Z").toLocaleString('pt-BR', { day: "2-digit", month: "short" }),
            new Date("2022-03-26T00:00:00.000Z").toLocaleString('pt-BR', { day: "2-digit", month: "short" }),
            new Date("2022-03-27T00:00:00.000Z").toLocaleString('pt-BR', { day: "2-digit", month: "short" }),
            new Date("2022-03-28T00:00:00.000Z").toLocaleString('pt-BR', { day: "2-digit", month: "short" }),
            new Date("2022-03-29T00:00:00.000Z").toLocaleString('pt-BR', { day: "2-digit", month: "short" })
        ],
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3
        }
    }
}
const series = [
    {
        name: 'series1', data: [31, 120,11, 24,65, 18, 120]
    }
]

export default function Dashboard() {

    const [showChart, setShowChart] = useState(false)

        useEffect(() => {
            const timer = setTimeout(() => setShowChart(true), 500)

            // Cleaning the timeout between re-renders to avoid loops
            return () => clearTimeout(timer)
        }, [])


    return(
        <Flex direction={'column'} h='100vh' >

            <Header />

            <Flex w={'100%'} my='6' maxWidth={1480} mx='auto' px={'6'} >
                <Sidebar />

                <SimpleGrid flex={'1'} gap='4' minChildWidth={'320px'} alignItems='flex-start'>
                    <Box
                    p={['6', '8']}
                    bg='gray.800'
                    borderRadius={8}
                    pb='4'
                    >
                        <Text fontSize='lg'  mb={'4'}>Inscritos da semana </Text>
                        <Chart  options={options} series={series} type='area' height={160} />
                    </Box>
                    <Box
                    p={['6', '8']}
                    bg='gray.800'
                    borderRadius={8}
                    pb='4'
                    >
                        <Text
                        fontSize='lg'
                        mb={'4'}
                        
                        >Taxa de abertura</Text>
                         <Chart  options={options} series={series} type='area' height={160} />

                    </Box>

                </SimpleGrid>
            </Flex>
        </Flex>
    )
}