import React from 'react'

export default function Loading() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-80">
      <div className="spinner-border text-primary mb-3" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="display-6 ps-4 fw-light text-primary">Loading...</p>
    </div>
  )
}
