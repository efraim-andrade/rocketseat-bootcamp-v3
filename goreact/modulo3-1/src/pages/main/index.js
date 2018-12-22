import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FavoritesActions from '../../store/actions/favorites';

class Main extends React.Component {
  static propTypes = {
    addFavoriteRequest: PropTypes.func.isRequired,
    favorites: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
      }),
    ).isRequired,
  }

  state = {
    repositoryInput: '',
  }

  handleAddRepository = (e) => {
    e.preventDefault();

    this.props.addFavoriteRequest(this.state.repositoryInput);
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />

          <button type="submit">Adicionar</button>
        </form>

        <ul>
          { this.props.favorites.map(favorite => (
            <li key={favorite.id}>
              <p>
                <strong>{favorite.name}</strong> ({favorite.description})
              </p>

              <a href={favorite.url}>Acessar</a>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoritesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
