import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt } from 'graphql';

const authenticationStepType = new GraphQLObjectType({
  name: 'AuthenticationStep',
  fields: {
    step: { type: GraphQLInt },
    type: { type: GraphQLString },
    name: { type: GraphQLString },
    fields: { 
      type: GraphQLList(
        new GraphQLObjectType({
          name: 'AuthenticationStepFields',
          fields: {
            name: { type: GraphQLString },
            value: { type: GraphQLString },
            fields: {  
              type: GraphQLList(
                new GraphQLObjectType({
                  name: 'TwitterAuthenticationStepFields',
                  fields: {
                    name: { type: GraphQLString },
                    value: { type: GraphQLString }
                  }
                })
              )
            },
          }
        }),
      )
    }
  }
})

export default authenticationStepType;