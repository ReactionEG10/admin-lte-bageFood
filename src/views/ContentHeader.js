import React from 'react'

export default function ContentHeader(props) {
  return (
    <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h3 className="m-0 text-dark">{props.name}</h3>
              </div>
            </div>{/* /.row */}
          </div>{/* /.container-fluid */}
        </div>
  )
}
