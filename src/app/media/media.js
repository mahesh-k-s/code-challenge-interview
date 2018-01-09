import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CurrentUser from '../current-user/current-user';
import { searchMedia } from '../../actions/index';

class MediaPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      filteredContent: props.medias,
    };
  }

  componentWillReceiveProps(props) {
    this.props = props;
    this.setFilter(this.state.filter);
  }

  setFilter(filter) {
    this.setState({
      filter,
      filteredContent: (this.props.medias || [])
        .filter(i => (filter == null || i.kind === filter)),
    });
  }

  search(text) {
    this.props.searchMedia(text);
  }

  renderItem(album) {
    return (
      <Link
        to={`/media/${album.trackId}`}
        className="mr3 mt3 border-box"
        key={album.trackId}
        style={{ width: '200px' }}
      >
        <div
          className="h5 bg-center cover no-repeat primary"
          style={{ height: '200px', backgroundImage: `url(${album.artworkUrl100.replace('100x100', '200x200')})` }}
        />
        <div className="ph2 pv3 f5 primary h3 truncate">{album.trackName}</div>
      </Link>);
  }

  render() {
    const { filter } = this.state;
    const albums = this.state.filteredContent || this.props.medias || [];

    return (
      <div className="flex flex-column bg-center primary cover absolute aspect-ratio--object">
        <header className="flex flex-none pv2 ph3 items-center">
          <div className="w-80 f2"><i className="fa fa-play accent-text pa3" />
            <span className="white f2 ttu pa3  fw1">Music Player</span>
          </div>
          <CurrentUser />
        </header>
        <section className="flex-auto flex ternary ">
          <div className="pa4 w-100 flex flex-column">
            <div className="flex">
              <h2 className="secondary-contrast fw1 f2">Library</h2>
              <div className="flex-auto" />
              <div className="w-30 pa3 mv2" style={{ minWidth: 400 }}>
                <div className="relative">
                  <input
                    className="f5 w-100 primary bw0 ph3 pv2 br-pill outline-0"
                    type="text"
                    placeholder="Search..."
                    onKeyUp={event => this.search(event.target.value)}
                  />
                  <i className="fa fa-search absolute top-0 pv2 right-1" />
                </div>
              </div>
            </div>
            <ul className="list f4 flex ttc tl pa0">
              <li className={`${filter == null && 'accent-text'} pointer`} onClick={() => this.setFilter(undefined)}>All</li>
              <li className={`${filter === 'feature-movie' && 'accent-text'} ml4 pointer`} onClick={() => this.setFilter('feature-movie')}>Movies</li>
              <li className={`${filter === 'song' && 'accent-text'} ml4 pointer`} onClick={() => this.setFilter('song')}>Songs</li>
            </ul>
            <div className="flex flex-wrap h-100 overflow-auto">
              {albums.map(album => this.renderItem(album))}
              {albums.length === 0 && <div className="f3 fw1 mv3">No content</div>}
            </div>
          </div>
        </section>
        <section className="gray tc pa3">Copyright &copy; All rights reserved</section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    medias: state.medias,
    currentUser: state.user && state.user.currentUser,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    searchMedia,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaPage);
