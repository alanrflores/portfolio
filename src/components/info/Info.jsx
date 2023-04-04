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
      <div className='img-apollo'>
      <img src="https://global.discourse-cdn.com/business5/uploads/apollographql/original/1X/25bd5104d61020fe4dc0777a5919cd009bca633e.png" alt="apollo-logo" />
      </div>
      <div className='img-graph'>
      <img src="https://www.returngis.net/wp-content/uploads/2019/08/graphql-logo.png" alt="apollo-logo" />
      </div>
      <div className='img-graph'>
      <img src="https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png" alt="mysql-logo" />
      </div>
      <div className='img-typescript'>
      <img src="https://media.graphassets.com/resize=w:1024,h:1024,fit:crop/cache=expiry:max/auto_image/compress/tY84PS6sQSqGkPZafCXy" alt="ts-logo" />
      </div>
      <div className='img-wordpress'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1200px-WordPress_blue_logo.svg.png" alt="wordpress-logo" />
      </div>
      <div className='img-reactnative'>
      <img src="https://www.datocms-assets.com/45470/1631026680-logo-react-native.png" alt="reactnative-logo" />
      </div>
      <div className='img-mongodb'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png" alt="mongodb-logo" />
      </div>
      
    </div>
    </div>
    </div>
  )
}

export default Info
