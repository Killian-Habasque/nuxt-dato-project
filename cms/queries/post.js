export default gql`
query Post {
  _allPostsMeta {
    count
  }
  allPosts {
    id
    title
    _status
    _firstPublishedAt
  }
}
`