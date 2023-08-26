import { useCallback, useEffect } from 'react';
import styled from 'styled-components';

import { ToastType } from '../../constants/types';
import { TOAST_DURATION } from '../../constants/constants';

interface TostProps {
  toastlist: ToastType[];
  setList: React.Dispatch<React.SetStateAction<ToastType[]>>;
}

const Toast = ({ toastlist, setList }: TostProps) => {
  const deleteToast = useCallback(
    (id: number) => {
      const toastListItem = toastlist.filter((e: ToastType) => e.id !== id);
      setList(toastListItem);
    },
    [toastlist, setList],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastlist.length) {
        deleteToast(toastlist[0].id);
      }
    }, TOAST_DURATION);

    return () => {
      clearInterval(interval);
    };
  }, [toastlist, deleteToast]);

  return (
    <NotificationsContainer>
      {toastlist.map((toast, i) => (
        <Notification key={i}>
          <Message>{toast.message}</Message>
          <CloseButton onClick={() => deleteToast(toast.id)}>X</CloseButton>
        </Notification>
      ))}
    </NotificationsContainer>
  );
};

export default Toast;
const NotificationsContainer = styled.div`
  position: fixed;
  z-index: 10;
  bottom: 10vh;
  width: 99%;
  right: calc((100vw - 100%) / 4);
  animation: toast-in-right 0.7s;
  @media (min-width: 767px) {
    right: 1rem;
    width: auto;
  }
  @keyframes toast-in-right {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;
const Notification = styled.div`
  display: flex;
  flex-direction: row;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 300px;
  min-width: 200px;
  margin-inline: auto;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: var(--gray97);
  border-left: 0.25rem solid var(--soft-cyan);
  border-radius: 0.5rem 0.5rem;
  box-shadow: 0 0 10px #999;
  opacity: 0.8;
  transition: 0.3s ease;
  animation: toast-in-right 0.7s;
  :hover {
    box-shadow: 0 0 12px #fff;
    opacity: 1;
  }
`;
const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
`;
const Message = styled.p`
  margin-block: 1rem;
  font-weight: bold;
  text-align: left;
`;
