import React from 'react';
import { Modal } from 'antd';
import { useRouter } from 'next/router';

type Props = {
  dirty: boolean;
};

export function ModalConfirmUnsaved({ dirty }: Props) {
  const [shouldShowLeaveConfirmDialog, setShouldShowLeaveConfirmDialog] = React.useState(false);
  const [nextRouterPath, setNextRouterPath] = React.useState<string>('');
  const Router = useRouter();

  const onRouteChangeStart = React.useCallback(
    (nextPath: string) => {
      if (!dirty) {
        return;
      }

      setShouldShowLeaveConfirmDialog(true);
      setNextRouterPath(nextPath);

      throw 'cancelRouteChange';
    },
    [dirty]
  );

  const onRejectRouteChange = () => {
    setNextRouterPath('/');
    setShouldShowLeaveConfirmDialog(false);
  };

  const onConfirmRouteChange = () => {
    setShouldShowLeaveConfirmDialog(false);

    removeListener();
    Router.push(nextRouterPath);
  };

  const removeListener = () => {
    Router.events.off('routeChangeStart', onRouteChangeStart);
  };

  React.useEffect(() => {
    Router.events.on('routeChangeStart', onRouteChangeStart);

    return removeListener;
  }, [onRouteChangeStart]);

  return (
    <Modal
    className="w-[780px]"
    centered
    closable={false}
    wrapClassName="modal-delete"
    open={shouldShowLeaveConfirmDialog}
    footer={[
      <div key="footer" className="flex justify-end">
        <button
          key="cancel"
          className="w-[118px] h-[55px] bg-[#bab8b8] mr-[16px] mt-[-20px] text-white flex justify-center items-center text-base rounded-[5px] font-bold border-none cursor-pointer"
          onClick={onRejectRouteChange}
        >
          いいえ
        </button>
        <button
          key="ok"
          className="w-[118px] h-[55px] bg-[#fc8686] mt-[-20px] text-white flex justify-center items-center text-base rounded-[5px] font-bold border-none cursor-pointer"
          onClick={onConfirmRouteChange}
        >
          はい
        </button>
      </div>,
    ]}
  >
    <div className="text-confirm">削除するとアカウントデータが消去されます。本当に削除してよろしいですか？</div>
  </Modal>
  );
}
