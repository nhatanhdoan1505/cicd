import { notification } from 'antd';
import { ArgsProps } from 'antd/lib/notification';
import { useSelector } from 'common/hooks';
import { useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { resetNotification } from 'store/actions';
import { CloseOutlined } from '@ant-design/icons';
import { SuccessTick } from 'common/icons';

export function useNotification() {
  const { notification: notificationState } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const onCloseNotification = useCallback(() => {
    dispatch(resetNotification());
  }, [dispatch]);

  useEffect(() => {
    if (!notificationState.isOpen) {
      return;
    }

    const notificationBody = {
      message: notificationState.message,
      description: notificationState.description,
      placement: notificationState.placement,
      onClose: onCloseNotification,
      icon: notificationState.icon,
      closeIcon: <CloseOutlined className="text-white text-xs" />,
      className: 'custom-notification'
    } as ArgsProps;

    switch (notificationState.type) {
      case 'error':
        notification.error(notificationBody);
        break;
      case 'info':
        notification.info(notificationBody);
        break;
      case 'success':
        notification.success({ ...notificationBody, icon: <SuccessTick /> });
        break;
      case 'warning':
        notification.warning(notificationBody);
        break;
      default:
        break;
    }
  }, [notificationState.isOpen, onCloseNotification]); //eslint-disable-line react-hooks/exhaustive-deps
}
