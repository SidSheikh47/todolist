import { useState, useEffect } from "react";
import './App.scss'
import InputComponent from './components/input/input';
import ListComponent from './components/list/list';
import { deleteData, getData, postData, updateData } from './components/utilities/httprequesthandlers';

const Home = () => {

  const [listData, setListData] = useState([])

  useEffect(() => {
    setList();
  }, [])

  const setList = () => {
    getData().then((data) => {
      setListData(data.data);
    }).catch(error => {
      console.log('error', error)
    })
  }

  const onSubmit = (item) => {
    const data = {
      item: item
    }

    postData(data).then(data => {
      // setListData([...listData], data)
      setList();
    }).catch(error => {
      console.log('error', error)
    })
  }

  const onDelete = (item) => {
    const data = {
      id: item._id
    }

    deleteData(data).then(data => {
      // var arr = listData.filter(item => {
      //   console.log(item)
      //   if (item._id != id) {
      //     return item
      //   }
      // })
      // setListData(arr)
      setList();
    })
  }

  const onCheck = (item) => {
    const data = {
      id: item._id,
      status: !item.status
    }

    updateData(data).then(data => {
      setList();
    }).catch(error => {
      console.log('error', error)
    })
  }

  return (
    <div className="home">
      <header className="home-header">
        To-Do List
      </header>
      <div>
        <InputComponent onSubmit={onSubmit} />
        
        <ListComponent 
          tasklist={listData} 
          onDelete={onDelete} 
          onCheck={onCheck} 
        />
      </div>
    </div>
  )
}

export default Home;