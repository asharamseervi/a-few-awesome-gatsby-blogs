import React from 'react';
import Layout from '../components/Layout';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <main>
          <h1>Not Found</h1>
          <p>We don't seem to have this topic covered yet. <a href="mailto:hello@pixeesoft.ch">Drop us a line</a> and we'll make it happen! 💪</p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/e8gxyzosgqQ"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullscreen
          />


          <p>And also follow us on <a href="https://www.facebook.com/pixeesoft">facebook</a>, <a href="https://twitter.com/pixeesoft">twitter</a>, <a href="https://www.instagram.com/pixeesoft/">instagram</a> or <a href="https://www.youtube.com/channel/UCg2y5wwYSWQnqMjYGI7QoEg">youtube</a>!</p>
        </main>
      </Layout>
    );
  }
}

export default NotFoundPage;