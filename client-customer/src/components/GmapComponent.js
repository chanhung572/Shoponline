import React, {Component} from 'react';

class Gmap extends Component {
    render() {
        return (
            <div className="align-center">
                <h2 className="text-center">MY LOCATION</h2>
                <iframe title="Gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.669198597634!2d106.69378927596225!3d10.759957732160728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f133b3687cd%3A0x755f978db67bbe85!2zMzg2IMSQLiBIb8OgbmcgRGnhu4d1LCBQaMaw4budbmcgNSwgUXXhuq1uIDQsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1721491921034!5m2!1svi!2s" width="800" height="600" style={{border:0}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
            </div>
        );
    }
}
export default Gmap;

