import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

class UserList extends Component {

   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         students: [
            { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
            { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
            { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
            { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
         ]
      }
   }

    renderTableData() {
      return this.state.students.map((student, index) => {
         const { id, name, age, email } = student //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{name}</td>
               <td>{age}</td>
               <td>{email}</td>
            </tr>
         )
      })
   }
    

  render() {
    return (
    <div>
     
     <h3 id='title'>User List</h3>
            <Table striped bordered hover id='students' size="sm"> 
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>NickName</th>
                <th>Employee</th>
              </tr>
            </thead>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </Table>

    </div>
    )
  }
}

export default UserList;