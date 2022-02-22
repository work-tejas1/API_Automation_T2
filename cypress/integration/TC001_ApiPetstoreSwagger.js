/// <reference types="cypress" />

describe('Pet store API automation tests', () => {
  before(() => {
    cy.clearCookies({ log: false })
    cy.clearLocalStorage({ log: false })
    cy.fixture('dataAPI').then(data => {
      globalThis.data = data
    })
  })

  it('POST: Add a new pet to the store', () => {
    cy.request({
      method: 'POST',
      url: `${data.baseUrlApi}/pet`,
      body: {
        id: 5,
        category: {
          id: 5,
          name: `${data.petCategory}`,
        },
        name: `${data.petName}`,
        photoUrls: ['string'],
        tags: [
          {
            id: `${data.petId}`,
            name: 'string',
          },
        ],
        status: 'available',
      },
    }).then(response => {
      expect(response.status).to.eq(200)
      assert.isNotEmpty(response.body)
      expect(response.body.category.name).to.eq('Dog')
      expect(response.body.name).to.eq('Dog Name 9999')
      expect(response.body.status).to.eq('available')
    })
  })

  it('GET: Find Pet by id', () => {
    cy.request({
      method: 'GET',
      url: `${data.baseUrlApi}/pet/${data.petId}`,
    }).then(response => {
      expect(response.status).to.eq(200)
      assert.isNotEmpty(response.body)
    })
  })

  it('PUT: Update existing pet', () => {
    cy.request({
      method: 'PUT',
      url: `${data.baseUrlApi}/pet`,
      body: {
        id: 5,
        category: {
          id: 5,
          name: `${data.petCategory}`,
        },
        name: `${data.updatedPetName}`,
        photoUrls: ['string'],
        tags: [
          {
            id: 5,
            name: 'string',
          },
        ],
        status: 'available',
      },
    }).then(response => {
      expect(response.status).to.eq(200)
      assert.isNotEmpty(response.body)
      expect(response.body.category.name).to.eq('Dog')
      expect(response.body.name).to.eq('Updated Dog Name 8888')
      expect(response.body.status).to.eq('available')
    })
  })

  it('DELETE: Delete Pet by id', () => {
    cy.request({
      method: 'DELETE',
      url: `${data.baseUrlApi}/pet/${data.petId}`,
    }).then(response => {
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq(data.petId)
    })
  })
})
