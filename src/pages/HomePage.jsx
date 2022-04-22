import React from 'react'
//! TO CONNECT TO REDUX USE
// import { connect, useDispatch, useSelector } from 'react-redux'
// import { loadTasks } from '../store/actions/tasksActions'

export const _HomePage = () => {
  //! REDUX CONNECTION
  //  const dispatch = useDispatch()
  //  const { tasks } = useSelector((state) => state.tasksModule)
  //  console.log(tasks)

  //  useEffect(() => {
  //    dispatch(loadTasks())
  //  }, [])

  return <div>HomEPage</div>
}

// !TO CONNECT TO REDUX
// const mapDispatchToProps = {
//   loadTasks,
// }

// export const HomePage = connect(null, mapDispatchToProps)(_HomePage)
