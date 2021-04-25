import React, { useState , useEffect} from 'react';
import styles from  './index.module.less';
import { Tree  } from 'antd';
import {
  FormOutlined,
  CloseOutlined,
  CheckOutlined,
} from "@ant-design/icons";

const { TreeNode } = Tree;

const LIST_TREE_DATA = [
  {
    editvalue: '0-0',//渲染的value
    initValue:'0-0',//初始化的value
    key: '0-0',
    isEditStatus:false,//设定是否为编辑状态
    children: [
      {
        editvalue: '0-0-0',
        initValue:'0-0-0',
        key: '0-0-0',
        isEditStatus:false,
        children: [
          {  editvalue: '0-0-0-0',initValue:'0-0-0-0', key: '0-0-0-0',isEditStatus:false},
          { editvalue: '0-0-0-1',initValue:'0-0-0-1', key: '0-0-0-1',isEditStatus:false },
          { editvalue: '0-0-0-2',initValue:'0-0-0-2', key: '0-0-0-2',isEditStatus:false },
        ],
      },
      {
        editvalue: '0-0-1',
        initValue:'0-0-1',
        key: '0-0-1',
        isEditStatus:false,
        children: [
          {  editvalue: '0-0-1-0',initValue:'0-0-1-0', key: '0-0-1-0',isEditStatus:false },
          {  editvalue: '0-0-1-1',initValue:'0-0-1-1',key: '0-0-1-1',isEditStatus:false },
          {  editvalue: '0-0-1-2',initValue:'0-0-1-2', key: '0-0-1-2',isEditStatus:false },
        ],
      },
      {
        editvalue: '0-0-2',
        initValue:'0-0-2',
        key: '0-0-2',
        isEditStatus:false,
      },
    ],
  },
  {
    editvalue: '0-1',
    initValue:'0-1',
    key: '0-1',
    isEditStatus:false,
    children: [
      { editvalue: '0-1-0-0',initValue:'0-1-0-0', key: '0-1-0-0' ,isEditStatus:false },
      { editvalue: '0-1-0-1',initValue:'0-1-0-1', key: '0-1-0-1' ,isEditStatus:false },
      { editvalue: '0-1-0-2',initValue:'0-1-0-2', key: '0-1-0-2' ,isEditStatus:false },
    ],
  },
  {
    editvalue: '0-2',
    initValue:'0-2',
    key: '0-2',
    isEditStatus:false,
  },
];

function Index(props) {
  const [treeData ,setTreeData ] = useState(LIST_TREE_DATA);

  useEffect(() => {
    setTreeData(treeData);
  }, [treeData]);

  //渲染树形数据
  const renderTree = (data) => {
    let itemNode = data.map((item) => {
      if (item.isEditStatus) {
        item.title = (
          <div>
            <input value={item.editvalue || ''} onChange={(e) => onChange(e, item.key)}/>
            <CloseOutlined
              style={{ marginLeft: 10 }}
              onClick={() => onClose(item.key, item.initValue)}
            />
            <CheckOutlined
              style={{ marginLeft: 10 }}
              onClick={() => onSave(item.key)}
            />
          </div>
        );
      } else {
        item.title = (
          <div>
            <span>{item.editvalue}</span>
            <span>
              <FormOutlined
                style={{ marginLeft: 10 }}
                onClick={() => onEdit(item.key)}
              />
            </span>
          </div>
        );
      }
      //如果有子项，进行递归
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {renderTree(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} />;
    });
    return itemNode;
  }

  //编辑
  const onEdit = (key) => {
    handleEdit(key,treeData);
    setTreeData([...treeData]);
  };

  const handleEdit = (key, data) =>
    data.forEach((item) => {
      if (item.key == key) {
        item.isEditStatus = true;
      } else {
        item.isEditStatus = false;
      }
      if (item.children) {
        handleEdit(key, item.children);
      }
    });

  const onChange = (e, key) => {
    handleChange(key, e.target.value, treeData);
    setTreeData([...treeData]);
  };
  
  const handleChange = (key, value, data) =>
    data.forEach((item) => {
      if (item.key == key) {
        item.editvalue = value;
      }
      if (item.children) {
        handleChange(key, value, item.children);
      }
    });

  //保存
  const onSave = (key) => {
    saveNode(key, treeData);
    setTreeData([...treeData]);
  };

  const saveNode = (key, data) =>
    data.forEach((item) => {
      if (item.key === key) {
        item.initValue = item.editvalue;
      }
      if (item.children) {
        saveNode(key, item.children);
      }
      item.isEditStatus = false;
    });

  //取消
  const onClose = (key, value) => {
    closeNode(key, value, treeData);
    setTreeData([...treeData]);
  };

  const closeNode = (key, value, data) =>
    data.forEach((item) => {
      item.isEditStatus = false;
      if (item.key === key) {
        item.editvalue = value;
      }
      if (item.children) {
        closeNode(key, value, item.children);
      }
    });


  return (
    <div className={styles.indexPageWrap}>
      <div className="treeCon">
        <Tree
        showLine
        defaultExpandedKeys={['0-0-0']}
        >
          {renderTree(treeData)}
        </Tree>
      </div>
    </div>
  );
}

export default Index;