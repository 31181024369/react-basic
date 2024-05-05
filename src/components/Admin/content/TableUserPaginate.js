import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../../../services/apiService';
import ReactPaginate from "react-paginate";
const TableUserPaginate = (props) => {
    const {listUsers,handleClickBtnUpdate,handleClickBtnDelete,fetchListUsersWithPaginate,pageCount,currentPage, setCurrentPage}=props;
   

    const handlePageClick = (event) => {
       console.log(event);
       fetchListUsersWithPaginate(+event.selected+1);
       setCurrentPage(+event.selected+1);
    };
    
    return (
        <>
        <table className="table table-hover table-bordered">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {listUsers && listUsers.length>0 && 
                listUsers.map((item,index)=>{
                    return (
                        <tr key={index}>
                            <th>{item.id}</th>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                            <td>
                                <button className='btn btn-secondary'>View</button>
                                <button 
                                className='btn btn-warning mx-3'
                                onClick={()=>{handleClickBtnUpdate(item)}}
                                >Update</button>
                                <button className='btn btn-danger'
                                onClick={()=>{handleClickBtnDelete(item)}}
                                >Delete</button>
                            </td>
                        </tr>

                    );
                })}
                {listUsers && listUsers.length===0 && 
                <tr>
                    <td colSpan={"4"}>
                        Not found data
                    </td>
                </tr>
                }
               
               
            </tbody>
            </table>
            <div className="user-pagination">
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                    forcePage={currentPage-1}
            />
      </div>
            
        </>
    );
};

export default TableUserPaginate;