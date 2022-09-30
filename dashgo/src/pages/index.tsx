import { Flex, Button, Stack, useBreakpointValue } from '@chakra-ui/react';
import { Input } from '../components/Form/inputs'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { error } from 'console';

type InputPropsSubmit = {
  email: string;
  password:string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

export default function SignIn() {

  const { register, handleSubmit, formState } = useForm<InputPropsSubmit>({
    resolver: yupResolver(signInFormSchema)
  })

  const handleSignIn: SubmitHandler<InputPropsSubmit> = async(values)  => {
     await new Promise(resolve =>  setTimeout(resolve,2000))
    
    console.log(values)

  }
 
  return (
    <Flex
      width='100vw'
      height='100vh'
      alignItems='center'
      justifyContent='center'
    >

      <Flex
        as='form'
        width='100%'
        maxWidth={360}
        bg='gray.800'
        p='8'
        borderRadius={8}
        flexDir='column'
        onSubmit={handleSubmit(handleSignIn)}
      >

        <Stack spacing={4} >
          <Input  type='email' label='E-mail' {...register('email')}  />
          <Input type='password' label='Password' {...register('password')} />


        </Stack>
        <Button type='submit' mt='6' colorScheme='pink' size='lg' isLoading={formState.isSubmitting} > Entrar </Button>

      </Flex>
    </Flex>

  )
}
