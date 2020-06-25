import React, { useEffect, useRef, useState, useCallback } from 'react'
import ReactDOM from 'react-dom'
import { FiX } from 'react-icons/fi'

const useModal: any = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = useCallback(() => {
    setIsOpen(!isOpen)
  }, [setIsOpen, isOpen])

  useEffect(() => {
    return () => {
      toggle()
    }
  }, [toggle])

  return { isOpen, toggle }
}

interface ModalProps {
  isShowing: boolean
  hide: () => {}
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isShowing, hide, children }) => {
  const overLayRef = useRef<HTMLDivElement>(null)

  // Maybe add a prop where you can disable backdrop click
  function handleOverlayClicked(e: React.SyntheticEvent) {
    if (e.target !== e.currentTarget) {
      return
    } else {
      hide()
    }
  }

  // Mounts component to the end of the document.body element instead of as a child of another component
  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div
            ref={overLayRef}
            className='fixed top-0 left-0 z-999 w-100 h-100 bg-moon-gray o-50'
          />
          <div
            className='fixed pa2 top-0 left-0 z-9999 w-100 h-100 overflow-x-hidden overflow-y-auto outline-0'
            aria-modal
            aria-hidden
            tabIndex={-1}
            role='dialog'
            onClick={handleOverlayClicked}
          >
            <div className='mt6 z-5 bg-white relative center br2 mw6 pa2 shadow-3'>
              <div id='modal-header' className='flex'>
                <button
                  onClick={hide}
                  type='button'
                  className='bg-white bn pointer absolute top-1 right-1 dim'
                >
                  <FiX size='25px' />
                </button>
              </div>
              <div className='ph2'>{children}</div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null
}

export { useModal, Modal, ModalProps }
