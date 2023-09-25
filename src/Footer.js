import React from 'react'

export default function Footer() {
  return (
 

<footer className="bg-dark footer-section">
  <div className="section">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h5 className="text-light">Email</h5>
          <p className="text-white paragraph-lg font-secondary">aminkab321@email.com</p>
        </div>
        <div className="col-md-4">
          <h5 className="text-light">Phone</h5>
          <p className="text-white paragraph-lg font-secondary">01289686163</p>
        </div>
        <div className="col-md-4">
          <h5 className="text-light">Address</h5>
          <p className="text-white paragraph-lg font-secondary">ElAgmy Alexandria</p>
        </div>
      </div>
    </div>
  </div>
  <div className="border-top text-center border-dark py-5">
    <p className="mb-0 text-light">Copyright &copy;<script>
        var CurrentYear = new Date().getFullYear()
        document.write(CurrentYear)
      </script> Designed &amp; Developed by <a className="text-white-50" href="Themefisher">Amin kabbary Elshishiny</a></p>
  </div>
</footer>
    
  )
}
