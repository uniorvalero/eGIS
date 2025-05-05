using FluentValidation;
using Microsoft.Extensions.DependencyInjection;

namespace Application
{
    public static class DependencyInjections
    {
        public static IServiceCollection AddApplication(this IServiceCollection services)
        {
            var assembly = typeof(DependencyInjections).Assembly;

            services.AddMediatR(config => config.RegisterServicesFromAssembly(assembly));

            services.AddValidatorsFromAssembly(assembly);

            return services;
        }
    }
}
