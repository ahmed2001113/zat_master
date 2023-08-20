import { data } from 'autoprefixer';
import gql from 'graphql-tag';

export const reviewMutation = gql`
mutation MyMutation(
  $rating: Int!,
   $content: String!,
  $commentOn: Int!,
  $author: String!,
  $authorEmail:String,
  $id:String
) {
  writeReview(
    input: {
      rating: $rating,
       content: $content,
      commentOn: $commentOn,
      author: $author,
      authorEmail:$authorEmail,
      clientMutationId:$id
    }
  ) {
    clientMutationId
    rating
  }
}
`
 