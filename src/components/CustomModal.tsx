import { FC, ReactNode, useState } from 'react'
import styled from 'styled-components'
import { IconButton, Modal, Tooltip } from '@mui/material'

const Content = styled.div`
  min-width: 300px;
  min-height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px;
  border-radius: ${(props) => props.theme.borderRadius};
  background: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.primary.contrastText};
  box-shadow: 0 0 24px ${(props) => props.theme.palette.common.black};
`

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  color: ${({ theme }) => theme.palette.primary.contrastText};
`

type TProps = {
    label: string
    children: ReactNode
    buttonIcon?: ReactNode
}

const CustomModal:FC<TProps> = ({ label, children, buttonIcon }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Tooltip title={label} arrow>
        <IconButton color="primary" onClick={handleOpen}>
          {buttonIcon}
        </IconButton>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Content>
          <Title>{ label }</Title>
          {children}
        </Content>
      </Modal>
    </>
  )
}

export default CustomModal
