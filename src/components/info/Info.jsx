import React from 'react'
import style from './info.module.css'

const Info = () => {
  return (
    <div className={style.infoContainer}>
    <div className={style.info}>    
    <hr />
    <div className={style.divInfoImg}>
      <div className='img-node'>
      <img src="https://www.jacobsoft.com.mx/wp-content/uploads/2020/04/node-js-736399_960_720-2.png" alt="nodejs-logo" />
      </div>
      <div className='img-sql'>
      <img src="http://3.bp.blogspot.com/-KhMg7SQzoxw/VwkBoST61qI/AAAAAAAAAfc/sJWdjmdwSzcviRuQx8CMVgDvboDHa7BEw/s1600/sql.png" alt="sql-logo" />
      </div>
      <div className='img-postgresql'>
      <img src="https://programandoointentandolo.com/wordpress/wp-content/uploads/2019/03/postgres.png" alt="" />
      </div>
      <div className='img-js'>
      <img src="https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png" alt="javascript-logo" />
      </div>
      <div className='img-react'>
      <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" alt="react-logo" />
      </div>
      <div className='img-redux'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Redux_Logo.png" alt="redux-logo" />
      </div>
      <div className='img-firebase'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Firebase_Logo.png" alt="firebase-logo" />
      </div>
    </div>
    </div>
    </div>
  )
}

export default Info
