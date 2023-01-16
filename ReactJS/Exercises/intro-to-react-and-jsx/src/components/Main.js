/* eslint-disable jsx-a11y/anchor-is-valid */

export const Main = () => {
  return (
    <section >
      <div id="main_slider" class="carousel slide banner-main" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#main_slider" data-slide-to="0" class="active"></li>
          <li data-target="#main_slider" data-slide-to="1"></li>
          <li data-target="#main_slider" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container">
              <div class="row marginii">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div class="carousel-caption ">
                    <h1>Welcome To The <strong class="color">Nutrients Plants</strong></h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                    <a class="btn btn-lg btn-primary" href="#" role="button">About</a>
                    <a class="btn btn-lg btn-primary" href="#" role="button">Contact US</a>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div class="img-box">
                    <figure><img src="images/gyufyufyu.png" alt="img" /></figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="row marginii">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div class="carousel-caption ">
                    <h1>Welcome To The <strong class="color">Nutrients Plants</strong></h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                    <a class="btn btn-lg btn-primary" href="#" role="button">About</a>
                    <a class="btn btn-lg btn-primary" href="#" role="button">Contact US</a>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div class="img-box ">
                    <figure><img src="images/gyufyufyu.png" alt="img" /></figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="row marginii">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div class="carousel-caption ">
                    <h1>Welcome To The <strong class="color">Nutrients Plants</strong></h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                    <a class="btn btn-lg btn-primary" href="#" role="button">About</a>
                    <a class="btn btn-lg btn-primary" href="#" role="button">Contact US</a>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div class="img-box">
                    <figure><img src="images/gyufyufyu.png" alt="img" /></figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
          <i class='fa fa-angle-left'></i></a>
        <a class="carousel-control-next" href="#main_slider" role="button" data-slide="next">
          <i class='fa fa-angle-right'></i>
        </a>
      </div>
    </section>
  );
};