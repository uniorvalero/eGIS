namespace Infrastructure.Persistence.Repository
{
    public interface IGenericRepository<T> where T : class
    {
        Task CreateAsync(T entity);
        void Update(T entity);
        Task DeleteAsync(T entity);
        Task<T> GetById(int id);
        Task<IEnumerable<T>> GetAllAsync();

    }
}
