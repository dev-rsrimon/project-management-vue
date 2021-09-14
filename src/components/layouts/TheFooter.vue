<template>
     <footer class="footer_section">
       <div class="tork-container">
         <div class="tork-row">
           <div class="tork-col-md-4 tork-col-lg-5">
             <div class="details">
               <div class="logo">
                 <img :src="logo" alt="">
               </div>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                 been the industry's standard dummy text ever since the 1500s.</p>
             </div>
           </div>
           <div class="tork-col-lg-2 tork-col-md-3">
             <h4>Mobile app</h4>
             <ul>
               <li><router-link to="#">Features</router-link></li>
               <li><router-link to="#">Live share</router-link></li>
               <li><router-link to="#">Video record</router-link></li>
             </ul>
           </div>
           <div class="tork-col-lg-2 tork-col-md-3">
             <h4>Useful Links</h4>
             <ul>
               <li><router-link to="#">Home</router-link></li>
               <li><router-link to="#">How to Enroll</router-link></li>
             </ul>
           </div>
           <div class="tork-col-md-2 tork-lg-3">
             <h4>Company</h4>
             <ul>
               <li><router-link to="#">About us</router-link></li>
               <li><router-link to="#">Contact us</router-link></li>
               <li><router-link to="#">History</router-link></li>
             </ul>
           </div>
         </div>
         <!-- copyright -->
         <div class="copyright">
           <div class="tork-d-flex tork-justify-space-between tork-items-center">
             <p>&copy; All Copyright, <a href="#">Synapse Medical Academy</a>. 2021</p>
             <ul class="social_links tork-d-flex">
               <li><router-link to="#"><span class="icon-facebook-square"></span></router-link></li>
               <li><router-link to="#"><span class="icon-twitter-square"></span></router-link></li>
               <li><router-link to="#"><span class="icon-instagram-square"></span></router-link></li>
               <li><router-link to="#"><span class="icon-linkedin"></span></router-link></li>
             </ul>
           </div>
         </div>
       </div>
     </footer>
</template>

<script>
    export default {
      name: 'TheFooter',
      props: {
        logo: {
          type: String,
          default: '' 
        },
      },
    }
</script>

<style lang="scss" scoped>
.footer_section {
  padding-top: 9rem;
  background: $light-color;
  @include responsiveMax(768px) {
    padding-top: 3.5rem;
  }

  .details {
    .logo {
      width: 8rem;
      margin-bottom: 1rem;
      @include responsiveMax(768px) {
        width: 11rem;
      }

      img {
        width: 100%;
        height: auto;
      }
    }

    p {
      font-size: .875rem;
      color: $dark-color;
      font-weight: 400;
      line-height: 1.3rem;
    }
  }

  h4 {
    font-size: 1rem;
    margin-bottom: 1.6rem;
    color: $primary-color;
    font-weight: 600;

    @include responsiveMax(576px) {
      margin: 1rem 0;
    }
  }

  ul {
    li {
        margin-top: .5rem;
      a {
        font-size: .85rem;
        font-weight: 400;
        color: $dark-color;

        &:hover {
            color: $primary-color;
        }
      }
    }
  }

  .copyright {
    margin-top: 4rem;
    padding: 1rem 0;
    border-top: 1px solid $light-color;

    @include responsiveMax(768px) {
      margin-top: 3rem;
      padding: .5rem 0;
    }

    p {
        font-size: .75rem;
        a {
            font-weight: 500;
            color: $primary-color;
        }
    }

    .social_links {
      li {
        a {
          font-size: 1.8rem;
          color: $primary-color;
          @include responsiveMax(768px) {
              font-size: 1.5rem;
          }

          margin-left: 0.8rem;
          &:hover {
            color: $dark-color;
          }
        }
      }
    }
  }
}

</style>