import React from 'react'
import './Sell.css'
function Sell() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <div className='sell-container' >
                <div className='sell-section'>
                    <h2 className='sell-title'>sell your Books</h2>
                    <div className='sell-image'>
                        <img src="https://img.freepik.com/premium-vector/pile-student-books-icon-illustration-white-background_134830-290.jpg?size=626&ext=jpg" alt="sellimage" />
                    </div>
                    <div>
                        <form onSubmit={handleSubmit} className='bookDetails'>
                            <div >
                                <input type='text' name='bookimage' placeholder=' Provide image link' />
                            </div>
                            <div >
                                <input type='text' name='bookName' placeholder=' Enter Book Name' />
                            </div>
                            <div >
                                <input type='text' name='sellerName' placeholder=' Enter Seller Name' />
                            </div>
                            <div>
                                <input type='text' name='authorName' placeholder=' Enter Author Name' />
                            </div>
                            <div>
                                <input type='number' name='year' placeholder=' Enter Year of Publication' />
                            </div>
                            <div>
                                <input type='number' name='price' placeholder=' Enter price' />
                            </div>
                            <button type='submit' className='bottonSubmit'> Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sell
