import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CurrentUser from '../current-user/current-user';

class MediaDescriptionPage extends Component {
  renderItem(album) {
    return (
      <div className="flex">
        <div className="mr3 mt3 border-box" style={{ width: '200px' }} >
          <div
            className="h5 bg-center cover no-repeat primary"
            style={{ height: '200px', backgroundImage: `url(${album.artworkUrl100.replace('100x100', '200x200')})` }}
          />
        </div>
        <div className="flex flex-column items-center pa2">
          <div className="flex mv1 w-100">
            <div className="tr mr2 w4">Artist</div>
            <div className="white o-80">{album.artistName}</div>
          </div>
          <div className="flex mv1 w-100">
            <div className="tr mr2 w4">Country</div>
            <div className="white o-80">{album.country}</div>
          </div>
          <div className="flex mv1 w-100">
            <div className="tr mr2 w4">Kind</div>
            <div className="white o-80 ttu">{album.kind}</div>
          </div>
          {album.collectionPrice !== 0 &&
            <div className="flex mv1 w-100">
              <div className="tr mr2 w4">Price</div>
              <div className="white o-80 ttu">${album.collectionPrice}</div>
            </div>}
          {album.trackCount &&
            <div className="flex mv1 w-100">
              <div className="tr mr2 w4">Tracks</div>
              <div className="white o-80 ttu">{album.trackCount}</div>
            </div>}
          {album.releaseDate &&
            <div className="flex mv1 w-100">
              <div className="tr mr2 w4">Tracks</div>
              <div className="white o-80">{moment(album.releaseDate).format('LL')}</div>
            </div>}
        </div>
      </div>);
  }

  render() {
    const { id } = this.props.match.params;
    const media = this.props.medias.find(i => `${i.trackId}` === id);
    if (media == null) {
      return <Redirect to="/media" />;
    }
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
            <h2 className="secondary-contrast fw1 f2">{media.trackName}</h2>
            <div className="flex flex-wrap h-100 overflow-auto" >
              {this.renderItem(media)}
            </div>
          </div>
        </section>
        <section className="gray tc pa3">Copyright &copy; All rights reserved</section>
      </div>);
  }
}

function mapStateToProps(state) {
  return {
    medias: state.medias,
  };
}

export default connect(mapStateToProps)(MediaDescriptionPage);
