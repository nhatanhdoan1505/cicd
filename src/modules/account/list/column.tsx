import TitleTable from 'common/components/table/title';
import { ListAccountUser } from './dto';
import { NextRouter } from 'next/router';
import moment from 'moment';
import { accountStatus } from './common';
interface ColumnProps {
  router: NextRouter;
  setIsModalConfirmDelete: React.Dispatch<React.SetStateAction<boolean>>;
  setIdDeleteUser: React.Dispatch<React.SetStateAction<string[]>>;
}

function Column({ router, setIsModalConfirmDelete, setIdDeleteUser }: ColumnProps) {
  return [
    {
      title: (sortColumn: any) => (
        <div style={{ width: 'max-content' }}>
          <TitleTable title="ログインID" name="loginId" sortColumn={sortColumn} />
        </div>
      ),
      dataIndex: 'loginId',
      key: 'loginId',
      defaultSortOrder: ['ascend'],
      sortDirections: ['descend', 'ascend', 'descend'],
      sorter: true,
      width: 100,
    },
    {
      title: (sortColumn: any) => (
        <div style={{ width: 'max-content' }}>
          <TitleTable title="メールアドレス" name="email" sortColumn={sortColumn} />
        </div>
      ),
      dataIndex: 'email',
      key: 'email',
      defaultSortOrder: ['ascend'],
      sortDirections: ['ascend', 'descend', 'ascend'],
      sorter: true,
      width: 180,
    },
    {
      title: (sortColumn: any) => (
        <div style={{ width: 'max-content' }}>
          <TitleTable title="氏名" name="familyName" sortColumn={sortColumn} />
        </div>
      ),
      dataIndex: 'familyName',
      key: 'familyName',
      defaultSortOrder: ['ascend'],
      sortDirections: ['ascend', 'descend', 'ascend'],
      sorter: true,
      width: 130,
    },
    {
      title: (sortColumn: any) => (
        <div style={{ width: 'max-content' }}>
          <TitleTable title="最終ログイン日時" name="lastLogin" sortColumn={sortColumn} />
        </div>
      ),
      dataIndex: 'lastLogin',
      key: 'lastLogin',
      defaultSortOrder: ['ascend'],
      sortDirections: ['ascend', 'descend', 'ascend'],
      sorter: true,
      width: 130,
      render: (time: string) => <div>{moment(time).format('YYYY/MM/DD HH:mm:ss')}</div>,
    },
    {
      title: (sortColumn: any) => (
        <div style={{ width: 'max-content' }}>
          <TitleTable title="状態" name="isActive" sortColumn={sortColumn} />
        </div>
      ),
      dataIndex: 'isActive',
      key: 'isActive',
      defaultSortOrder: ['ascend'],
      sortDirections: ['ascend', 'descend', 'ascend'],
      sorter: true,
      width: 100,
      render: (isActive: boolean) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              marginRight: '5px',
              background: `${isActive ? accountStatus['active']['color'] : accountStatus['deActive']['color']}`,
            }}
          />
          <p>{isActive ? accountStatus['active']['title'] : accountStatus['deActive']['title']}</p>
        </div>
      ),
    },
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      fixed: 'right',
      width: 60,
      render: (record: ListAccountUser) => (
        <>
          <div className="action-col" style={{ width: 'max-content' }}>
            <span className="action-col__edit" onClick={() => router.push('/account/create')}>
              <a>編集</a>
            </span>
            <span
              className="action-col__delete"
              onClick={() => {
                setIdDeleteUser([record?.loginId]);
                setIsModalConfirmDelete(true);
              }}
            >
              <a>削除</a>
            </span>
          </div>
        </>
      ),
    },
  ];
}

export default Column;
