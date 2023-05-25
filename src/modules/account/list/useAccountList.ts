import { useState } from "react";
import { FormikValues } from "formik";
import { deleteAccountAdmin, getAccountList } from "./services";
import { sortDirection, Pagination, ListAccountUser } from "./dto";
import { sortColumnListAccount, sortDirectionAccount } from "./common";
import { isNil, omitBy } from "lodash";
import { useApiCaller } from "common/hooks";

export default function useAccountList() {
  const [listAccountUser, setListAccountUser] = useState<ListAccountUser[]>(null!);
  const [userPagination, setUserPagination] = useState<Pagination>();
  const [searchKeyWord, setSearchKeyWord] = useState<string>();
  const [isModalConfirmDelete, setIsModalConfirmDelete] = useState(false);
  const [idDeleteUser, setIdDeleteUser] = useState<string[]>([]);
  const { request: getAccount, loading: loadingGetAccountAdmin } = useApiCaller({apiCaller: getAccountList});
  const { request: deleteAccount } = useApiCaller({apiCaller: deleteAccountAdmin, messageSuccess: 'データを削除しました。'});

  const getListAccount = async () => {
    const params = omitBy({
      keyword: searchKeyWord ? searchKeyWord : null,
      sortColumn: sortColumnListAccount?.loginId,
      sortType: sortDirection.ASC
    }, isNil);
    try {
      const { data }: any = await getAccount(params);
      setListAccountUser(data?.records);
      setUserPagination({
        total: data?.total,
        page: data?.page,
        limit: data?.limit
      });
    } catch (error) { }
  };

  const handleTableChange = async (paginate: any, _: any, sorter: any) => {
    const params = omitBy({
      keyword: searchKeyWord ? searchKeyWord : null,
      page: paginate?.current,
      limit: paginate?.pageSize,
      sortColumn: sortColumnListAccount[sorter?.columnKey] || sortColumnListAccount?.loginId,
      sortType: sortDirectionAccount[sorter?.order] || sortDirection.ASC
    }, isNil);
    try {
      const {data}: any = await getAccount(params);
      setListAccountUser(data?.records);
      setUserPagination({
        total: data?.total,
        page: data?.page,
        limit: data?.limit
      });
    } catch (error) { }
  };

  const handleSearchKeyword = async (values: FormikValues) => {
    const params = omitBy({
      keyword: values?.keyword ? values?.keyword : null,
      sortColumn: sortColumnListAccount?.loginId,
      sortType: sortDirection.ASC
    }, isNil);
    try {
      const {data}: any = await getAccount(params);
      setListAccountUser(data?.records);
      setUserPagination({
        total: data?.total,
        page: data?.page,
        limit: data?.limit
      });
    } catch (error) { }
  };

  const handleDeleteAccountUser = async () => {
    try {
      await deleteAccount(idDeleteUser);
      getListAccount();
    } catch (error) { }
    finally {
      setIsModalConfirmDelete(false);
    }
  };
  
  return {
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
    searchKeyWord
  };
}