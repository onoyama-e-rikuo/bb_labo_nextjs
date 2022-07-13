import { Flex, Spacer } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { BbDrawer } from '../atoms/Drawer'

export const NavigationBar: React.FC = () => {
  return (
    <Flex p='12px' justify='space-between' align='center'>
      <Heading as='h1'>BB LABO.</Heading>
      <BbDrawer />
    </Flex>
  )
}
