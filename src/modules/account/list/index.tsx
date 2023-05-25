import React, { useMemo, useEffect } from 'react';
import Table from 'common/components/table';
import Column from './column';
import { Form, Formik, Field } from 'formik';
import { SearchIcon } from 'common/icons/searchIcon';
import { Modal } from 'antd';
import { useRouter } from 'next/router';
import useAccountList from './useAccountList';

const msgConfirmDelete = <>削除するとアカウントデータが消去されます。本当に削除してよろしいですか？</>;
function AccountList() {
  const router = useRouter();
  const {
    getListAccount,
    handleTableChange,
    handleSearchKeyword,
    handleDeleteAccountUser,
    listAccountUser,
    userPagination,
    isModalConfirmDelete,
    setIsModalConfirmDelete,
    setSearchKeyWord,
    setIdDeleteUser,
    loadingGetAccountAdmin,
    searchKeyWord,
  } = useAccountList();

  const columnTable = useMemo(() => Column({ router, setIsModalConfirmDelete, setIdDeleteUser }), []);

  useEffect(() => {
    getListAccount();
  }, []);

  return (
    <div className="relative bg-white">
      <div className="h-[103px] bg-[#D6D6D6] flex">
        <h3 className="text-2xl font-bold mx-[32px] my-[35px]">アカウント管理</h3>
      </div>
      <div className="p-[32px] pb-0">
        <Formik
          initialValues={{
            keyword: null,
          }}
          onSubmit={(values) => handleSearchKeyword(values)}
        >
          {({ setFieldValue }) => (
            <Form>
              <div className="relative w-[262px] mb-[45px]">
                <Field
                  name="keyword"
                  placeholder="検索"
                  className="w-full h-[38px] bg-[#F0F0F0] rounded-[5px] border-none px-6 outline-none"
                  value={searchKeyWord}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFieldValue('keyword', e.target.value);
                    setSearchKeyWord(e.target.value);
                  }}
                />
                <button type="submit" className="absolute right-0 top-0 mr-[10px] mt-[10px] cursor-pointer border-none">
                  <SearchIcon />
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <Table
          dataSource={listAccountUser || []}
          pagination={{
            total: userPagination?.total,
            current: userPagination?.page,
            pageSize: userPagination?.limit,
            showSizeChanger: true,
            pageSizeOptions: ['10', '20', '50'],
          }}
          column={columnTable}
          onChange={handleTableChange}
          loading={loadingGetAccountAdmin}
        />
      </div>
      <div
        className="bottom-0 right-0 h-[87px] flex justify-end items-center"
        style={{ position: listAccountUser?.length > 0 ? 'absolute' : 'unset' }}
      >
        <button
          onClick={() => router.push('/account/create')}
          className="h-[55px] bg-[#FC8686] rounded-[5px] border-none outline-none px-[68px] py-[17px] font-bold text-base text-white cursor-pointer mr-[32px]"
        >
          新規作成
        </button>
      </div>
      <Modal
        open={isModalConfirmDelete}
        width={680}
        closable={false}
        centered
        wrapClassName="modal-delete"
        onCancel={() => setIsModalConfirmDelete(false)}
        footer={
          <div className="flex justify-end">
            <div
              className="w-[118px] h-[55px] bg-[#bab8b8] mr-[16px] mt-[-20px] text-white flex justify-center items-center text-base rounded-[5px] font-bold border-none cursor-pointer"
              onClick={() => setIsModalConfirmDelete(false)}
            >
              いいえ
            </div>
            <div
              className="w-[118px] h-[55px] bg-[#fc8686] mt-[-20px] text-white flex justify-center items-center text-base rounded-[5px] font-bold border-none cursor-pointer"
              onClick={() => handleDeleteAccountUser()}
            >
              はい
            </div>
          </div>
        }
      >
        <div className="text-confirm">{msgConfirmDelete}</div>
      </Modal>
    </div>
  );
}

export default AccountList;
