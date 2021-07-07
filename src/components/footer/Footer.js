import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <ul class="social">
                <li>
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-rss"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <p class="copyright helvetica:medium">
                ყველა უფლება დაცულია &copy; 2021 - ბათუმის შოთა რუსთაველის
                უნივერსიტეტი
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
