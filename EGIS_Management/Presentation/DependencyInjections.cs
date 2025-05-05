using Microsoft.Extensions.DependencyInjection;

namespace Domain
{
    public static class DependencyInjections
    {
        public static IServiceCollection AddPresentation(this IServiceCollection services)
        {
            return services;
        }
    }
}
