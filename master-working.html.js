<!-- PRACTICE AREAS MEGA MENU HTML START -->
<a href="/practice-areas-dropdown" id="practice-areas-link">Practice Areas</a>

<!-- PRACTICE AREAS MEGA MENU -->
<div class="practice-areas-menu-wrapper" id="practiceAreasDropdown">
  <div class="practice-areas-menu-inner">
    <div class="practice-areas-menu-columns">

      <!-- ENERGY -->
      <div class="practice-areas-menu-col">
        <h3><a href="#">Energy</a></h3>
        <div class="practice-areas-menu-img"></div>
        <ul>
          <li><a href="#">Energy Permitting</a></li>
          <li><a href="#">Regulatory Compliance</a></li>
          <li><a href="#">Transmission Projects</a></li>
          <li><a href="#">Renewable Energy</a></li>
          <li><a href="#">Oil & Gas</a></li>
          <li><a href="#">Battery Storage</a></li>
          <li><a href="#">PPAs</a></li>
          <li><a href="#">Energy Financing</a></li>
        </ul>
      </div>

      <!-- ENVIRONMENTAL -->
      <div class="practice-areas-menu-col">
        <h3><a href="#">Environmental</a></h3>
        <div class="practice-areas-menu-img"></div>
        <ul>
          <li><a href="#">Environmental Permits</a></li>
          <li><a href="#">Site Remediation</a></li>
          <li><a href="#">SEQRA & NEPA</a></li>
          <li><a href="#">Brownfields</a></li>
          <li><a href="#">Wetlands & Water</a></li>
          <li><a href="#">Air & Water Quality</a></li>
          <li><a href="#">Environmental Compliance</a></li>
          <li><a href="#">Land & Lakes</a></li>
        </ul>
      </div>

      <!-- LAND & LAKES -->
      <div class="practice-areas-menu-col">
        <h3><a href="#">Land & Lakes</a></h3>
        <div class="practice-areas-menu-img"></div>
        <ul>
          <li><a href="#">Lake Permitting</a></li>
          <li><a href="#">Waterfront Development</a></li>
          <li><a href="#">Dock Approvals</a></li>
          <li><a href="#">Shoreline Zoning</a></li>
          <li><a href="#">Riparian Rights</a></li>
          <li><a href="#">Marina Projects</a></li>
        </ul>
      </div>

      <!-- CORPORATE -->
      <div class="practice-areas-menu-col">
        <h3><a href="#">Corporate</a></h3>
        <div class="practice-areas-menu-img"></div>
        <ul>
          <li><a href="#">Business Formation</a></li>
          <li><a href="#">Mergers & Acquisitions</a></li>
          <li><a href="#">Contract Drafting</a></li>
          <li><a href="#">Corporate Governance</a></li>
          <li><a href="#">Shareholder Agreements</a></li>
          <li><a href="#">Joint Ventures</a></li>
        </ul>
      </div>

      <!-- REAL ESTATE -->
      <div class="practice-areas-menu-col">
        <h3><a href="#">Real Estate</a></h3>
        <div class="practice-areas-menu-img"></div>
        <ul>
          <li><a href="#">Commercial Transactions</a></li>
          <li><a href="#">Leasing & Sales</a></li>
          <li><a href="#">Zoning & Land Use</a></li>
          <li><a href="#">Development Approvals</a></li>
          <li><a href="#">Title & Due Diligence</a></li>
          <li><a href="#">PILOT Agreements</a></li>
        </ul>
      </div>

      <!-- ADMINISTRATIVE -->
      <div class="practice-areas-menu-col">
        <h3><a href="#">Administrative</a></h3>
        <div class="practice-areas-menu-img"></div>
        <ul>
          <li><a href="#">Agency Representation</a></li>
          <li><a href="#">Permitting Appeals</a></li>
          <li><a href="#">FOIL & Open Meetings</a></li>
          <li><a href="#">Licensing Defense</a></li>
          <li><a href="#">Regulatory Hearings</a></li>
          <li><a href="#">Policy Guidance</a></li>
        </ul>
      </div>

      <!-- PROJECT PLANNING -->
      <div class="practice-areas-menu-col">
        <h3><a href="#">Project Planning</a></h3>
        <div class="practice-areas-menu-img"></div>
        <ul>
          <li><a href="#">Zoning Approvals</a></li>
          <li><a href="#">Land Use Strategy</a></li>
          <li><a href="#">Environmental Review</a></li>
          <li><a href="#">Community Outreach</a></li>
          <li><a href="#">Infrastructure Agreements</a></li>
          <li><a href="#">Development Contracts</a></li>
        </ul>
      </div>

    </div>
    <!-- PRACTICE AREAS MEGA MENU HTML START --!>

    <!-- VIEW ALL LEGAL SERVICES BUTTON HTML START -->
    <div class="practice-areas-menu-button-container">
      <a href="/practice-areas" class="practice-areas-menu-btn">View all Legal Services</a>
    </div>
  </div>
</div>
 <!-- VIEW ALL LEGAL SERVICES BUTTON HTML END -->

<!--  PRACTICE AREAS MEGA MENU JAVASCRIPT START -->
<script>
  document.addEventListener("DOMContentLoaded", function () {
    const link = document.querySelector('a[href="/practice-areas-dropdown"]');
    const menu = document.getElementById('practiceAreasDropdown');

    if (link && menu) {
      const hoverArea = document.createElement("div");
      hoverArea.style.position = "relative";
      link.parentNode.insertBefore(hoverArea, link);
      hoverArea.appendChild(link);
      document.body.appendChild(menu);

      hoverArea.addEventListener("mouseenter", () => {
        menu.style.display = "block";
      });

      hoverArea.addEventListener("mouseleave", () => {
        setTimeout(() => {
          if (!menu.matches(":hover")) menu.style.display = "none";
        }, 200);
      });

      menu.addEventListener("mouseenter", () => {
        menu.style.display = "block";
      });

      menu.addEventListener("mouseleave", () => {
        menu.style.display = "none";
      });
    }
  });
</script>
<!-- PRACTICE AREAS MEGA MENU JAVASCRIPT END -->

<!-- ATTORNEY MEGA MENU HTML START -->
<a href="/attorneys-dropdown">Attorneys</a>

<!-- ATTORNEY MEGA MENU -->
<div class="attorney-mega-menu-wrapper" id="attorneysDropdown">
  <div class="attorney-mega-menu-inner">
    <div class="attorney-mega-menu-scroll">
      <div class="attorney-mega-menu-track">

        <!-- THOMAS WEST -->
        <div class="attorney-mega-menu-card">
          <div class="photo"></div>
          <div class="name">Thomas West</div>
          <div class="title">Founding Partner</div>
          <ul class="attorney-mega-menu-areas">
            <li><img src="https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/646349d9-428e-4435-99d2-1af9b1797eea/gavel-svgrepo-com+%281%29.png" alt="gavel">Environmental Law</li>
            <li><img src="https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/646349d9-428e-4435-99d2-1af9b1797eea/gavel-svgrepo-com+%281%29.png" alt="gavel">Corporate Law</li>
            <li><img src="https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/646349d9-428e-4435-99d2-1af9b1797eea/gavel-svgrepo-com+%281%29.png" alt="gavel">Litigation & ADR</li>
          </ul>
          <a href="#">Learn More</a>
        </div>

        <!-- GREG MOUNTAIN -->
        <div class="attorney-mega-menu-card">
          <div class="photo"></div>
          <div class="name">Greg Mountain</div>
          <div class="title">Managing Partner</div>
          <ul class="attorney-mega-menu-areas">
            <li><img src="https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/646349d9-428e-4435-99d2-1af9b1797eea/gavel-svgrepo-com+%281%29.png" alt="gavel">Corporate Law</li>
            <li><img src="https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/646349d9-428e-4435-99d2-1af9b1797eea/gavel-svgrepo-com+%281%29.png" alt="gavel">Energy Development</li>
            <li><img src="https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/646349d9-428e-4435-99d2-1af9b1797eea/gavel-svgrepo-com+%281%29.png" alt="gavel">Environmental Law</li>
          </ul>
          <a href="#">Learn More</a>
        </div>

        <!-- MICHAEL PETERS -->
        <div class="attorney-mega-menu-card">
          <div class="photo"></div>
          <div class="name">Michael Peters</div>
          <div class="title">Partner</div>
          <ul class="attorney-mega-menu-areas">
            <li><img src="https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/646349d9-428e-4435-99d2-1af9b1797eea/gavel-svgrepo-com+%281%29.png" alt="gavel">Real Estate</li>
            <li><img src="https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/646349d9-428e-4435-99d2-1af9b1797eea/gavel-svgrepo-com+%281%29.png" alt="gavel">Environmental Law</li>
            <li><img src="https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/646349d9-428e-4435-99d2-1af9b1797eea/gavel-svgrepo-com+%281%29.png" alt="gavel">Litigation & ADR</li>
          </ul>
          <a href="#">Learn More</a>
        </div>

        <!-- CINDY MONACO -->
        <div class="attorney-mega-menu-card">
          <div class="photo"></div>
          <div class="name">Cindy Monaco</div>
          <div class="title">Of Counsel</div>
          <ul class="attorney-mega-menu-areas">
            <li><img src="https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/646349d9-428e-4435-99d2-1af9b1797eea/gavel-svgrepo-com+%281%29.png" alt="gavel">Environmental Law</li>
            <li><img src="https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/646349d9-428e-4435-99d2-1af9b1797eea/gavel-svgrepo-com+%281%29.png" alt="gavel">Litigation & ADR</li>
            <li><img src="https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/646349d9-428e-4435-99d2-1af9b1797eea/gavel-svgrepo-com+%281%29.png" alt="gavel">Real Estate</li>
          </ul>
          <a href="#">Learn More</a>
        </div>

        <!-- CHRISTOPHER W. RUST -->
        <div class="attorney-mega-menu-card">
          <div class="photo"></div>
          <div class="name">Christopher W. Rust</div>
          <div class="title">Associate Attorney</div>
          <ul class="attorney-mega-menu-areas">
            <li><img src="https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/646349d9-428e-4435-99d2-1af9b1797eea/gavel-svgrepo-com+%281%29.png" alt="gavel">Corporate Law</li>
            <li><img src="https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/646349d9-428e-4435-99d2-1af9b1797eea/gavel-svgrepo-com+%281%29.png" alt="gavel">Energy Development</li>
            <li><img src="https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/646349d9-428e-4435-99d2-1af9b1797eea/gavel-svgrepo-com+%281%29.png" alt="gavel">Zoning & Land Use</li>
          </ul>
          <a href="#">Learn More</a>
        </div>

        <!-- CHANDA HARRIS STEINBERG -->
        <div class="attorney-mega-menu-card">
          <div class="photo"></div>
          <div class="name">Chanda Harris Steinberg</div>
          <div class="title">Counselor</div>
          <ul class="attorney-mega-menu-areas">
            <li><img src="https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/646349d9-428e-4435-99d2-1af9b1797eea/gavel-svgrepo-com+%281%29.png" alt="gavel">Real Estate</li>
            <li><img src="https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/646349d9-428e-4435-99d2-1af9b1797eea/gavel-svgrepo-com+%281%29.png" alt="gavel">Zoning & Land Use</li>
            <li><img src="https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/646349d9-428e-4435-99d2-1af9b1797eea/gavel-svgrepo-com+%281%29.png" alt="gavel">Litigation & ADR</li>
          </ul>
          <a href="#">Learn More</a>
        </div>

        <!-- MATTHEW W. RIMKUNAS -->
        <div class="attorney-mega-menu-card">
          <div class="photo"></div>
          <div class="name">Matthew W. Rimkunas</div>
          <div class="title">Associate</div>
          <ul class="attorney-mega-menu-areas">
            <li><img src="https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/646349d9-428e-4435-99d2-1af9b1797eea/gavel-svgrepo-com+%281%29.png" alt="gavel">Energy Development</li>
            <li><img src="https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/646349d9-428e-4435-99d2-1af9b1797eea/gavel-svgrepo-com+%281%29.png" alt="gavel">Corporate Law</li>
            <li><img src="https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/646349d9-428e-4435-99d2-1af9b1797eea/gavel-svgrepo-com+%281%29.png" alt="gavel">Zoning & Land Use</li>
          </ul>
          <a href="#">Learn More</a>
        </div>

        <!-- MARK J. WAGNER JR. -->
        <div class="attorney-mega-menu-card">
          <div class="photo"></div>
          <div class="name">Mark J. Wagner Jr.</div>
          <div class="title">Counsel</div>
          <ul class="attorney-mega-menu-areas">
            <li><img src="https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/646349d9-428e-4435-99d2-1af9b1797eea/gavel-svgrepo-com+%281%29.png" alt="gavel">Energy Development</li>
            <li><img src="https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/646349d9-428e-4435-99d2-1af9b1797eea/gavel-svgrepo-com+%281%29.png" alt="gavel">Corporate Law</li>
            <li><img src="https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/646349d9-428e-4435-99d2-1af9b1797eea/gavel-svgrepo-com+%281%29.png" alt="gavel">Zoning & Land Use</li>
          </ul>
          <a href="#">Learn More</a>
        </div>

      </div>
    </div>
<!-- ATTORNEY MEGA MENU HTML END -->

    <!-- View All Attorneys Button HTML Start-->
    <div class="attorney-mega-menu-button-container">
      <a href="https://westfirmlaw.squarespace.com/attorneys" class="attorney-mega-menu-btn">View all Attorneys</a>
    </div>
  </div>
</div>
 <!-- View All Attorneys Button HTML END-->

<!-- Attorney Mega Menu JavaScript Start -->
<script>
  document.addEventListener("DOMContentLoaded", () => {
    const link = document.querySelector('a[href="/attorneys-dropdown"]');
    const menu = document.getElementById('attorneysDropdown');
    if (link && menu) {
      const hoverArea = document.createElement('div');
      hoverArea.style.position = 'relative';
      hoverArea.classList.add('attorney-mega-menu-hover-area');
      link.parentNode.insertBefore(hoverArea, link);
      hoverArea.appendChild(link);
      document.body.appendChild(menu);

      hoverArea.addEventListener('mouseenter', () => menu.style.display = 'block');
      hoverArea.addEventListener('mouseleave', () => setTimeout(() => {
        if (!menu.matches(':hover')) menu.style.display = 'none';
      }, 200));
      menu.addEventListener('mouseenter', () => menu.style.display = 'block');
      menu.addEventListener('mouseleave', () => menu.style.display = 'none');
    }
  });
</script>
<!-- Attorney Mega Menu JavaScript End -->

<!-- Squarespace Code Injection (Footer Section) -->

<!-- 1. Back to Top Button -->
<a href="#" class="back-to-top">
  Back to the Top
  <img src="https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/646349d9-428e-4435-99d2-1af9b1797eea/gavel-svgrepo-com+(1).png?content-type=image%2Fpng" alt="Gavel Icon" class="gavel-img" />
</a>

<!-- Back to Top Button Javascript Start -->
<script>
  document.querySelector('.back-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    const btn = document.querySelector('.back-to-top');
    if (!btn) return;
    btn.style.display = window.scrollY > 300 ? 'flex' : 'none';
  });
</script>
<!-- Back to Top Button Javascript End -->

<!-- Sticky Menu for Anchor Navigations JavaScript Start -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  const menu1 = document.getElementById('practice-area-anchor-link-menu');
  const menu2 = document.getElementById('attorney-anchor-navigation');
  if (!header) return;

  // Get the offset from the top of the page for each bar (if they exist)
  const offsets = [menu1, menu2]
    .filter(Boolean)
    .map(el => el.getBoundingClientRect().top + window.scrollY);

  // Find which comes first (smallest offset)
  const minOffset = Math.min(...offsets);

  window.addEventListener('scroll', function() {
    if (window.scrollY >= minOffset) {
      header.style.display = 'none';
    } else {
      header.style.display = '';
    }
  });
});
</script>
<!-- Sticky Menu for Anchor Navigations JavaScript End -->
